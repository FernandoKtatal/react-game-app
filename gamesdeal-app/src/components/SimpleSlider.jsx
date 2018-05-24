import React, { Component } from "react";
import Slider from "react-slick"
import Image from './Image';
import { logo } from '../assets/index';
import games from '../data/games';
import {colors} from '../styles/index';
import api from '../services/api';

const styles = {

    img: {
        width: '100%',
    },
   
}

const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: dots => (
        <div
          style={{
            backgroundColor: colors.primary,
            
          }}
        >
          <ul style={{ margin: "0px", padding:"0px"}}> {dots} </ul>
        </div>
      ),
     
            
  };



export default class SimpleSlider extends Component {

    renderGame = (game, index) => (
      <Image key={index} src={game.img}  style={styles.img} onClick={() => window.open(game.link, '_blank')}/>             
    );
    renderGames = () => this.props.games.map( this.renderGame);
    

    render() {
        console.log(this.props.games);
       return (
        <div>
            <Slider {...settings}>
            {this.renderGames()}
            </Slider>
        </div>
        );
  }
}