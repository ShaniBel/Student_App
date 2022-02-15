import React, { FC } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HomePage from "./pages/HomePage"
import StudentEditPage from "./pages/StudentEditPage"

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path='/student/:id/edit' component={StudentEditPage} />
        <Route path='/' component={HomePage} />
      </Switch>
    </Router>
  )
}

export default App
