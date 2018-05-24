import React from 'react';
import colors from '../styles/colors';
// import games from '../data/games';
import GameItem from './GameItem';
import api from '../services/api';

const styles = {
    container: {
      backgroundColor: colors.secondary,
    },
    teamDescription: {
      fontSize: 20,
      marginBottom: 50,
    },
       
  };

  export default class Game extends React.Component{

    state = {
      data: []
    }

    componentDidMount(){
      this.loadgames();
    }
    
    loadgames = async() =>{
      const games = await api.get(`/games`)
      this.setState({ data: games.data })
    }
    
  render(){
    return(
      <div
         id="catalogo"
         className="d-flex flex-wrap flex-column align-items-center justify-content-center p-4 p-sm-5"
         style={styles.container} 
      > 
        <h1 className="text-white align-self-left p-4">Catálogo</h1>

        <div className="container-fluid d-flex flex-wrap flex-row align-items-start justify-content-center">
           {this.state.data.map(game => <GameItem key={game.id} game={game} />)}
        </div>
     
     </div>
    );
  }
}
