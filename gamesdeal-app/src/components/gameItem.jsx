import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSteam from '@fortawesome/fontawesome-free-brands/faSteamSquare';



import colors from '../styles/colors';
import Image from './Image';
import { logo } from '../assets/index';


const styles = {
    imageCard: {
      width: 200,
    },
    title: {
      marginTop: 10,
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.white,
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
      width: '250px',
      height:'100%',
    },
  };
  
const GameItem = ({ game }) => (
    <div
      className="d-flex flex-column align-items-center
      justify-content-center m-5 mx-sm-0 my-sm-5 my-xl-4 mx-xl-4"
      style={styles.containerCard}
    >
      <Image src={game.photo} style={styles.imageCard} />
      <h4 className="m-0 mt-2" style={styles.title}>
        {game.name}
      </h4>
      <div className="d-flex flex-row p-md-0" style={styles.social}>
        <FontAwesomeIcon
          className="btn_icon"
          icon={faSteam}
          style={styles.icon}
          onClick={() => window.open(game.steam, '_blank')}
        />
        <FontAwesomeIcon
          className="btn_icon"
          icon={faSteam}
          style={styles.icon}
          onClick={() => window.open(game.steam, '_blank')}
        />
        <FontAwesomeIcon
          className="btn_icon"
          icon={faSteam}
          stßyle={styles.icon}
          onClick={() => window.open(game.steam,'_blank')}
        />
      </div>
    </div>
);

export default GameItem;