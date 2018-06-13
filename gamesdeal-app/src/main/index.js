import React, { Component } from 'react';
import '../styles/App.css';
import {logo} from '../assets/index';
import {colors} from '../styles/index';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Game from '../components/Game';
import SimpleSlider from '../components/SimpleSlider';
import games from '../data/games';
import { Provider } from 'react-redux';
import store from '../store';


 


const styles = {
  logo : {
    marginRight: 20,
    width: 70,
    height: 70
  },
  navbar : {
    backgroundColor : colors.primary,
    fontSize : 24
  },

  navbarTextContainer : {
    flex : 1
  }

};

class App extends Component {
  

  render() {
    return (
      <Provider store={store}>
        <React.Fragment> 
          <Navbar/>        
          <Game/>
          <Footer/>
        </React.Fragment>
      </Provider>  
    );
    
  }
}

export default App;
