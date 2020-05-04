import React from "react"
import { Route, Switch } from "react-router-dom"
import "./App.scss"
import Home from "./components/Home/Home"
import Navbar from "./components/Navigation/Navbar"
import Cart from "./components/ShoppingCart/Cart"
import SneakerList from "./components/Sneakers/SneakerList"
import SneakerPage from "./components/Sneakers/SneakerPage"
import SneakerProvider from "./contexts/sneakerContext"
import UserProvider from "./contexts/userContext"

function App() {
  return (
    <UserProvider>
      <SneakerProvider>
        <div className="App">
          <Navbar />
          <div className="nav-spacer"></div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <div className="container">
              <Route path="/cart">
                <Cart />
              </Route>
              <Route exact path="/sneakers">
                <SneakerList />
              </Route>
              <Route path="/sneakers/:id">
                <SneakerPage />
              </Route>
            </div>
          </Switch>
        </div>
      </SneakerProvider>
    </UserProvider>
  )
}

export default App
