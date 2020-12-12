import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Post from '../pages/Post';
import Posts from '../pages/Posts';
import Projects from '../pages/Projects';


// Routes
export default (
  <Router>
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route path='/about' component={ About } />
      <Route path='/contact' component={ Contact } />
      <Route path='/post/:slug' component={ Post } />
      <Route path='/post' component={ Posts } />
      <Route path='/projects' component={ Projects } />
    </Switch>
  </Router>
);