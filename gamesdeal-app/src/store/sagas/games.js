import api from '../../services/api';
import { call, put } from 'redux-saga/effects';
import { addGamesSuccess, searchGamesSucess, priceGamesSucess } from '../actions/games';

export function* addGamesRequest(action) {
    const response = yield call(api.get, `/games/?page=${action.payload.page}`);
    console.log(response)
    yield put(addGamesSuccess(response.data.results));
}

export function* searchGamesRequest(action){
    const response = yield call(api.get, `/games/?name=${action.payload.gameName}`); 
    yield put(searchGamesSucess(response.data.results));
    
}

export function* priceGamesRequest(action){
    const response = yield call(api.get, `/games/?price=${action.payload.price}`);
    console.log("aki");
    yield put(priceGamesSucess(response.data.results));
}

