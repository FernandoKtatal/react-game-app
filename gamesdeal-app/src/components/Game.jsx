import React from 'react';

import colors from '../styles/colors';
import games from '../data/games';
import GameItem from './GameItem';

const styles = {
    container: {
      backgroundColor: colors.secondary,
    },
    teamDescription: {
      fontSize: 20,
      marginBottom: 50,
    },
<<<<<<< HEAD
       
=======
    zokla: {
      color: colors.primary,
      fontSize: 25,
    },
    
>>>>>>> dev
  };

  const Game = () => (
      <div
         id="catalogo"
         className="d-flex flex-wrap flex-column align-items-center justify-content-center p-4 p-sm-5"
         style={styles.container} 
     > 
<<<<<<< HEAD
         <h1 className="text-white align-self-center p-4">Catálogo</h1>

        <div className="container-fluid d-flex flex-wrap flex-row align-items-start justify-content-center">
=======
         <h1 className="text-white text-left p-4">Catálogo</h1>

        <div className="container d-flex flex-wrap flex-row align-items-center justify-content-center">
>>>>>>> dev
           {games.games.map(game => <GameItem key={game.id} game={game} />)}
        </div>
     
     </div>    
  );

  export default Game;
