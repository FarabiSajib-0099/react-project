import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../main_components/Home';
import About from '../main_components/About';
import Service from '../main_components/Service';
import Blog from '../main_components/Blog';
import Contact from '../main_components/Contact';
export default class Header extends Component {
  render() {
    return (
      <Router>
      <div>
          <div class="site-preloader-wrap">
    <div class="cf-loader">
      <div class="loading-spinner"></div>
      <div class="go-rounder"></div>
      <div class="go-rounder another"></div>
      <div class="loader-text">
        website Loading
      </div>
    </div>
  </div>

        <div class="main-menu-area">
      <div class="container">
  <div class="row">
    <div class="col-lg-3">
      <div class="logo">
        <Link to="/"><img src="assets/img/logo.png" alt="Logo"/></Link>
      </div>
    </div>
    <div class="col-lg-9">
      <nav class="navbar navbar-expand-lg navbar-light">

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav main-menu ms-auto">
            <li class="nav-item  ">
              <Link  class="nav-link " to="/" role="button" aria-haspopup="true" aria-expanded="false">Home</Link>

            </li>
            <li class="nav-item ">
              <Link class="nav-link " to="/about" role="button" aria-haspopup="true" aria-expanded="false">About</Link>

            </li>
            <li class="nav-item ">
              <Link class="nav-link " to="/service" role="button" aria-haspopup="true" aria-expanded="false">Service</Link>

            </li>
            <li class="nav-item ">
              <Link class="nav-link " to="/our blog" role="button" aria-haspopup="true" aria-expanded="false">Blog</Link>

            </li>
            <li class="nav-item ">
              <Link class="nav-link " to="/contact" role="button" aria-haspopup="true" aria-expanded="false">Contact</Link>

            </li>
           
          </ul>
        </div>
      </nav>
    </div>
  </div>
</div>
</div>


<div id="search">
    <button type="button" class="close">×</button>
    <form>
      <input type="search" value="" placeholder="SEARCH KEYWORD(s)" />
      <button type="submit" class="btn theme-btn"><i class="fa fa-search"></i> Search</button>
    </form>
  </div>
         <Switch>
          <Route exact path="/" component={Home} />
          
          <Route exact path="/about" component={About} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/our blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
         </div>
        </Router>
    )
  }
}
