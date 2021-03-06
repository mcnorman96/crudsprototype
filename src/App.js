import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import About from './components/dashboard/About'
import Contact from './components/dashboard/Contact'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
