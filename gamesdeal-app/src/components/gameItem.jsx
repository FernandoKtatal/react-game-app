import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSteam from '@fortawesome/fontawesome-free-brands/faSteam';
import faNu from '@fortawesome/fontawesome-free-brands/faCloudscale';
import g2a from '../assets/g2a.png';
import ImageFilter from 'react-image-filter';
import nuuvem from '../assets/nulog.png';
import steam from '../assets/steam.png';


import colors from '../styles/colors';
import Image from './Image';
import { logo } from '../assets/index';

const styles = {
    imageCard: {
      width: '100%',
      height: '130px',
      resizeMode: 'cover',
      borderRadius: 10,
    },
    title: {
      marginTop: 10,
      fontSize: 15,
      fontWeight: 'bold',
      color: colors.text,
      textAlign: 'center',
    },
    price: {
      color: colors.text,
      paddingRight: 10,
      marginTop: 10,
      fontSize: 15,
      fontWeight: 'bold',
    },
    description: {
      color: colors.primary,
      fontSize: 16,
    },
    icon: {
      width: 30,
      paddingRight: 10,
    },
    containerCard: {
      width: '205px',
      height:'250px',
      backgroundColor: colors.cardBackground,
      padding: 10,
      borderRadius: 10,

    },
    
    icon:{
      color: colors.regular,
      width: 16,
      height: 16,
      paddingRight: 10,
      marginTop: 10,
      marginRight: 10,
      borderRadius: 100,
           
    },

    icon2:{
      color: colors.regular,
      width: 16,
      height: 16,
      paddingRight: 10,
      marginTop: 10,
      marginRight: 10,
      borderRadius: 100,
    },

    icon3:{
      color: colors.regular,
      width: 30,
      height: 15,
      paddingRight: 10,
      marginTop: 10,
      marginRight: 10,
    },
  };
  
const GameItem = ({ game }) => (
 
  <div
      className="d-flex flex-column align-items-center
      col-md-2 m-5 mx-sm-0 my-sm-5 my-xl-4 mx-xl-4"
      style={styles.containerCard}
    >
      <Image resizeMode="cover" src={game.img} style={styles.imageCard} />

      <h1 className="m-0 mt-2" style = {styles.title}>
          {game.name}
      </h1>

      <div className="d-flex flex-column align-items-center
      justify-content-center">


        {game.priceNu === null ? "" :
          <div className="d-flex flex-row align-items-center
          justify-content-center p-md-0 ">
            { 
              <ImageFilter className="btn_icon image"
              style={styles.icon}
              image={nuuvem}
              onClick={() => window.open(game.linkNu, '_blank')}
              />
            }
          <div className="align-items-center
      justify-content-center" style={styles.price}>
          {"R$ " + game.priceNu}
          </div>
        </div>
      }

      {game.priceSteam === null ? "" :
        <div className="d-flex flex-row align-items-center
        justify-content-center p-md-0">
          { 
            <ImageFilter className="btn_icon image"
            style={styles.icon2}
            image={steam}
            onClick={() => window.open(game.linkSteam, '_blank')}
            />
          }
          <div className="align-items-center
      justify-content-center" style={styles.price}>
          {"R$ " + game.priceSteam}
          </div>
        </div>
      }

      {game.priceG2a === null ? "" :
        <div className="d-flex flex-row align-items-center
        justify-content-center p-md-0">
          { 
            <ImageFilter className="btn_icon image"
            style={styles.icon3}
            image= {g2a}
            onClick={() => window.open(game.linkG2a, '_blank')}
            />
          }
          <div className="align-items-center
      justify-content-center" style={styles.price}>
          {"R$ " + game.priceG2a}
          </div>
        </div>
      }

      </div>

    
    </div>
);

export default GameItem;