import api from '../../services/api';
import { call, put } from 'redux-saga/effects';
import { addGamesSuccess, searchGamesSucess } from '../actions/games';

export function* addGamesRequest(action) {
    const response = yield call(api.get, `/games/?page=${action.payload.page}`);
    console.log(response)
    yield put(addGamesSuccess(response.data.results));
}

export function* searchGamesRequest(action){
    const response = yield call(api.get, `/games/?name=${action.payload.gameName}`); 
    yield put(searchGamesSucess(response.data.results));
    
}