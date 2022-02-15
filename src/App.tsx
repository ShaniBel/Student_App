import React, { FC } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HomePage from "./pages/HomePage"
import "./App.css"

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={HomePage} />
      </Switch>
    </Router>
  )
}

export default App
