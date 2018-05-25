import React, {Component} from 'react'
import {colors} from '../styles/index';
import axios from 'axios'
import api from '../services/api';
import GameItem from './GameItem';


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
        results: [],
        data: [],
        query: ''
    }

    
    componentDidMount(){
        this.loadgames();
      }
      
      loadgames = async() =>{
        const games = await api.get(`/games`)
        this.setState({ data: games.data })
    }

    getInfo = async () => {
        const response = await api.get(`/games/?name=${this.state.query}`)
        this.setState({results: response.data})
        console.log(this.state.results);
    }

    handleInputChange = () => {
           this.setState({
               query:this.search.value
           }, () =>{ 
           if(this.state.query && this.state.query.length > 1){
               if(this.state.query.length % 2 ===0){
                   this.getInfo()
               }
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

export default Search