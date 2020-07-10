// write your custom hook here to control your checkout form
import { useLocalStorage } from './useLocalStorage'

export const useForm = (key, initalValues) => {
    const [values, setValues] = useLocalStorage(key, initalValues)

    const handleChanges = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    return[values, handleChanges]
}