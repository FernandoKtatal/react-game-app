import React from 'react';
import colors from '../styles/colors';
import GameItem from './GameItem';
import api from '../services/api';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as GamesActions from '../store/actions/games';
import * as PageActions from '../store/actions/page';

const styles = {
    container: {
      backgroundColor: colors.secondary,
    },
    teamDescription: {
      fontSize: 20,
      marginBottom: 50,
    },
    viewMoreBtn:{
      marginTop: 20,
      borderWidth: 0,
      height: 45,
      borderRadius: 5,
      fontSize: 14,
      color: colors.white,
      fontWeight: 'bold',
      backgroundColor: colors.primary,
    },
       
  };

  class Game extends React.Component{

  componentDidMount(){
     this.props.addGamesResquest();
  }
       
  render(){
    console.log(this.props)
    return(
      <div
         id="catalogo"
         className="d-flex flex-wrap flex-column align-items-center justify-content-center p-4 p-sm-5"
         style={styles.container} 
      > 
        <h1 className="text-white align-self-left p-4">Catálogo</h1>

        <div className="container-fluid d-flex flex-wrap flex-row align-items-start justify-content-center">
           {this.props.data.map(game => <GameItem key={game.id} game={game} />)}
        </div>
        <button className='btnViewMore' style={styles.viewMoreBtn} onClick={() => {this.props.UploadPageRequest(this.props.page[0]+1);}} > VER MAIS </button>
     </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.games,
  page: state.page,
})

const mapDispatchToProps = dispatch => 
  bindActionCreators({...GamesActions, ...PageActions}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Game);