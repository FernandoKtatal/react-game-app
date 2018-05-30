import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = [
    sagaMiddleware,
];

const store = createStore(reducers, applyMiddleware(...middleware));

sagaMiddleware.run(sagas);

export default store; 