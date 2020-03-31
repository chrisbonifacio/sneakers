import React from "react"
import { Route, Switch } from "react-router-dom"
import "./App.scss"
import Navbar from "./components/Navigation/Navbar"
import Cart from "./components/ShoppingCart/Cart"
import SneakerList from "./components/Sneakers/SneakerList"
import SneakerProvider from "./contexts/sneakerContext"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="nav-spacer"></div>
      <div className="container">
        <SneakerProvider>
          <Switch>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/sneakers">
              <SneakerList />
            </Route>
          </Switch>
        </SneakerProvider>
      </div>
    </div>
  )
}

export default App
