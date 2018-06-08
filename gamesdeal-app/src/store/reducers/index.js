import { combineReducers } from 'redux';
import games from './games';
import page from './page'

export default combineReducers({
    games, 
    page,
});
