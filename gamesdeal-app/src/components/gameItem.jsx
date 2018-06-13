import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSteam from '@fortawesome/fontawesome-free-brands/faSteam';
import faNu from '@fortawesome/fontawesome-free-brands/faCloudscale';
import g2a from '../assets/g2a.png';
import ImageFilter from 'react-image-filter';
import nuuvem from '../assets/nulog.png';



import colors from '../styles/colors';
import Image from './Image';
import { logo } from '../assets/index';

const styles = {
    imageCard: {
      width: '100%',
      borderRadius: 5,
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
      width: 30,
      paddingRight: 10,
      marginTop: 10,
      marginLeft:10,
      marginRight:10,
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
      justify-content-center col-md-2 m-5 mx-sm-0 my-sm-5 my-xl-4 mx-xl-4"
      style={styles.containerCard}
    >
      <Image src={game.img} style={styles.imageCard} />

      <h1 className="m-0 mt-2" style = {styles.title}>
          {game.name}
      </h1>
      <h2 className="d-flex flex-column align-items-center
      justify-content-center m-0 mt-2" style = {styles.price}>
          {game.priceNu === null ? "" : "R$" + game.priceNu }&nbsp;  
          {game.priceSteam === null ? "" : "R$" + game.priceSteam }&nbsp;
          {game.priceG2a === null ? "" : "R$" + game.priceG2a }&nbsp;
      </h2>
      <div className="d-flex flex-colmun align-items-center p-md-0 justify-content-center" style={styles.social}>
        
        {game.linkNu == null ? "" : 
          <ImageFilter
            className="btn_icon image"
            style={styles.icon}
            image= {nuuvem}
            //filter={ 'grayscale' } // see docs beneath
            //colorOne={ [0, 153, 204] }
            //colorTwo={ [254, 254, 254] }
            onClick={() => window.open(game.linkNu, '_blank')}
          /> 
        }
        
        {game.linkSteam == null ? "" : 
          <FontAwesomeIcon
            className="btn_icon image"
            icon={faSteam}
            style={styles.icon2}
            onClick={() => window.open(game.linkSteam, '_blank')}
          />
        }

        {game.linkG2a == null ? "" : 
            <ImageFilter
            className="btn_icon image"
            style={styles.icon3}
            image= {g2a}
            //filter={ 'grayscale' }// see docs beneath
            //colorOne={ [40, 250, 250] }
            //colorTwo={ [250, 150, 30] }
            onClick={() => window.open(game.linkG2a, '_blank')}
          />
        }
      </div>
    </div>
);

export default GameItem;