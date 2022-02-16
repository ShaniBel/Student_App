import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HomePage from "./pages/HomePage"
import StudentEditPage from "./pages/StudentEditPage"

const App = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route exact path='/student/:id/edit' component={StudentEditPage} />
        <Route exact path='/page/:pageNumber' component={HomePage} />
        <Route exact path='/' component={HomePage} />
      </Switch>
    </Router>
  )
}

export default App
