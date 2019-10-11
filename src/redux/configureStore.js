import { createStore, compose, applyMiddleware } from 'redux'
import { cacheEnhancer } from 'redux-cache'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import logger from 'redux-logger'


const configureStore = (initialState = {}) => 
    createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunk, logger),
            cacheEnhancer({ log: true }),            
            window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : f => f
        )
    );


export default configureStore;