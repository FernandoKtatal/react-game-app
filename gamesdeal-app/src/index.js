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

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
