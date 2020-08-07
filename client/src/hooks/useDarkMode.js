import { useLocalStorage } from './useLocalStorage'
import { useEffect } from 'react'

const useDarkMode = (key) => {
    const [darkMode, setDarkMode] = useLocalStorage(key)

    useEffect(() => {
        if (darkMode) {
            window.document.body.classList.add('dark-mode')
        }
        else {
            window.document.body.classList.remove('dark-mode')
        }
    }, [darkMode])
  

    return [darkMode, setDarkMode]
}
export default useDarkMode