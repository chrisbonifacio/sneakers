import React from "react"
import { Route, Switch } from "react-router-dom"
import "./App.scss"
import Navbar from "./components/Navigation/Navbar"
import Cart from "./components/ShoppingCart/Cart"
import SneakerList from "./components/Sneakers/SneakerList"
import SneakerPage from "./components/Sneakers/SneakerPage"
import SneakerProvider from "./contexts/sneakerContext"

function App() {
  return (
    <div className="App">
      <SneakerProvider>
        <Navbar />
        <div className="nav-spacer"></div>
        <div className="container">
          <Switch>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route exact path="/sneakers">
              <SneakerList />
            </Route>
            <Route path="/sneakers/:id">
              <SneakerPage />
            </Route>
          </Switch>
        </div>
      </SneakerProvider>
    </div>
  )
}

export default App
