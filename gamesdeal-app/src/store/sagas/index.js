import { all , takeLatest, take } from 'redux-saga/effects';
import { addGamesRequest, searchGamesRequest } from './games';
import { UploadPageRequest } from '../actions/page';

export default function* rootSaga(){
    return yield all([
        takeLatest('ADD_GAMES_REQUESTS', addGamesRequest),
        takeLatest('SEARCH_GAMES_REQUESTS', searchGamesRequest),
        takeLatest('UPLOAD_PAGE_REQUEST', UploadPageRequest),
    ]);
}
