import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Container
import ProjectsContainer from '../containers/ProjectsContainer';

// Pages
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

// Routes
export default (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/about' component={ About } />
    <Route path='/projects' component={ Projects } />
    <Route path='/contact' component={ Contact } />
  </Switch>
)