import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contact from './components/ContactPage';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/contact" component={Contact} />
      </div>
  </Router>,
document.getElementById('root')
)

