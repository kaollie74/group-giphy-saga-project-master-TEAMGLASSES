import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import createSagaMiddleware from 'redux-saga';


function* rootSaga() {
    yield takeEvery('FETCH_GIPHY', fetchGiphy);
}

function* fetchGiphy(action) {
    try {
        const response = yield axios.get('/api/search');
        yield put({ type: 'SET_GIPHY', payload: response.data})
        console.log(response.data);
    } catch {
        console.log('error on fetch');
        
    }
}


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

//reducer
const setGiphy = (state = {}, action) => {
    if(action.type === 'SET_GIPHY') {
        return action.payload;
    }
    return state;
}


// create store that all components can use
const reduxStore = createStore(
    combineReducers({
        setGiphy,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, 
    document.getElementById('react-root'));
