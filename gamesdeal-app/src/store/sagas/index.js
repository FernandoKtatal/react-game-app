import { all , takeLatest, take} from 'redux-saga/effects';
import { addGamesRequest, searchGamesRequest, priceGamesRequest } from './games';

export default function* rootSaga(){
    return yield all([
        takeLatest('ADD_GAMES_REQUESTS', addGamesRequest),
        takeLatest('SEARCH_GAMES_REQUESTS', searchGamesRequest),
        takeLatest('PRICE_GAMES_REQUESTS', priceGamesRequest),
    ]);
}
