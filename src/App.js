import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NotFound from './pages/NotFound'
import {Navbar,Nav} from 'react-bootstrap'
import IndexContainer from './pages/IndexContainer'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import DnD from './pages/DnD';

const App = () => {
  return (
    <>
    <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/index">YouApi</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/tipos">Tipos</Nav.Link>
          
        </Nav>
      </Navbar>
      <div className="container-fluid"> 
        <BrowserRouter>
              <Switch>
                  <Route exact path="/index" component={IndexContainer}/>
                  <Route exact path="/DnD" component={DnD}/>
                  <Route component={NotFound}/>
                  
              </Switch>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
