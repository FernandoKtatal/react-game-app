import { put } from 'redux-saga/effects';
import { UploadPageSuccess } from '../actions/page';

export function* UploadPageRequest(action) {
    console.log(action.payload.page);
    yield put(UploadPageSuccess(action.payload.page));
}