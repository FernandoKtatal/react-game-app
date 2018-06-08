import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSteam from '@fortawesome/fontawesome-free-brands/faSteam';
import g2a from '../assets/g2a.png';



import colors from '../styles/colors';
import Image from './Image';
import { logo } from '../assets/index';


const styles = {
    imageCard: {
      width: '100%',
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
      height:'320px',
      backgroundColor: colors.cardBackground,
      padding: 10,
    },
    icon:{
      color: colors.regular,
      width: 30,
      paddingRight: 10,
      marginTop: 10,
    },
  };
  
const GameItem = ({ game }) => (
    <div
      className="d-flex flex-column align-items-center
      justify-content-center col-md-2 m-5 mx-sm-0 my-sm-5 my-xl-4 mx-xl-4"
      style={styles.containerCard}
    >
      <Image src={game.img} style={styles.imageCard} />
      
      <h4 className="m-0 mt-2" style={styles.title}>
        {game.official}
      </h4>
      <div className="d-flex flex-column p-md-0" style={styles.social}>
        <div style={styles.price}>
          <FontAwesomeIcon
            className="btn_icon image"
            icon={faSteam}
            style={styles.icon}
            onClick={() => window.open(game.link, '_blank')}
          />
          R$ {game.price}
        </div>
        <div style={styles.price}>
          <FontAwesomeIcon
            className="btn_icon image"
            icon={faSteam}
            style={styles.icon}
            onClick={() => window.open(game.linkSteam, '_blank')}
          />
          R$ {game.priceSteam}
        </div>
        <div style={styles.price}>
          <FontAwesomeIcon
            className="btn_icon image"
            icon={faSteam}
            style={styles.icon}
            onClick={() => window.open(game.linkG2a,'_blank')}
          />
          R$ {game.priceG2a}
        </div>
      </div>
    </div>
);

export default GameItem;