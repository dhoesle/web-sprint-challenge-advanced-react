import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import PlantList from "./components/PlantList";
import ShoppingCart from "./components/ShoppingCart";
import CheckoutForm from "./components/CheckoutForm";
import useDarkMode from './hooks/useDarkMode'

import "./App.css";

function App() {
  // array of plants that have been added to the cart
  const [cart, setCart] = useState([]);
  const [darkMode, setDarkMode] = useDarkMode();

  // add a plant to the cart
  const addToCart = (plant) => {
    setCart([...cart, plant]);
  };

  // remove a plant from the cart
  const removeFromCart = (plant) => {
    setCart(cart.filter((p) => p.id !== plant.id));
  };

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode)
  }

  return (
    <div>
      <Router>
        <nav className="container">
          <h1>
            React Plants <span role="img">🌿</span>
          </h1>
          <div onClick={toggleMode} className="dark-mode__toggle">
            <div
              className={darkMode ? 'toggle toggled' : 'toggle'}
              />
          </div>
          <ul className="steps">
            <li>
              <NavLink exact to="/">
                Plants
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                Cart
                <span className="cart-badge">
                  {cart.length > 0 && cart.length}
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <Route
          exact
          path="/"
          render={() => <PlantList addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          render={(props) => (
            <ShoppingCart
              {...props}
              cart={cart}
              removeFromCart={removeFromCart}
            />
          )}
        />
        <Route path="/checkout" component={CheckoutForm} />
      </Router>
    </div>
  );
}

export default App;
