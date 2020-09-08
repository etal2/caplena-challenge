import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Sentences } from './sentences';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            sentences: Sentences,
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}