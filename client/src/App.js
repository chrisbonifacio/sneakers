import React from "react"
import { Route, Switch } from "react-router-dom"
import "./App.scss"
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
        </div>
      </SneakerProvider>
    </UserProvider>
  )
}

export default App
