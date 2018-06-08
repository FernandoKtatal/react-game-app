import React, {Component} from 'react'
import {colors} from '../styles/index';
import axios from 'axios'
import api from '../services/api';
import GameItem from './GameItem';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as GamesActions from '../store/actions/games';



const styles = {
    form : {
        width: 300,
        height: 35,
        backgroundColor: colors.whiteTransparent,
    },
    search : {
        color: colors.secondary
    },
}


class Search extends Component{
    state = {
        query: ''
    }
   
    handleInputChange = () => {
           this.setState({
               query:this.search.value
           }, () =>{ 
           if(this.state.query && this.state.query.length > 1){
               this.props.searchGamesRequest(this.state.query, this.props.page);
           }else if(!this.state.query){
           } 
        })
    }

    render(){
       
        return (
                <form>
                    <input className="form-control mr-sm-2" type="search" aria-label="Search" style={styles.form} 
                        placeholder="Pesquise"
                        ref={input => this.search = input}
                        value = {this.state.search}
                    />
                    <button className="btn btn-outline-secondary btn-sm my-2 my-sm-0 button-image buttonSearch" type="submit" style={styles.search} onClick={evt => {evt.preventDefault();this.handleInputChange();}}>Pesquise</button>
                    
                </form>
        )
    }
}

const mapStateToProps = state => ({
    data: state.games,
    page: state.page,
  })
  
const mapDispatchToProps = dispatch => 
    bindActionCreators(GamesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search)


