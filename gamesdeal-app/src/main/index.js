import React, { Component } from 'react';
import '../styles/App.css';
import {logo} from '../assets/index';
import {colors} from '../styles/index';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Game from '../components/Game';
import SimpleSlider from '../components/SimpleSlider';
import games from '../data/games';

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
      <React.Fragment> 
        <Navbar/>
        <SimpleSlider games={[games[0],games[1],games[2],games[3],games[4],games[5],games[6],games[7],games[8]]}/>
        <Game/>
        <Footer/>
      </React.Fragment>
    );
    
  }
}

export default App;
