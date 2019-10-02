import { createStore, compose, applyMiddleware } from 'redux'
import { cacheEnhancer } from 'redux-cache'
import thunk from 'redux-thunk'
import { rootReducer } from './reducer'
import logger from 'redux-logger'


const configureStore = () => 
    createStore(
        rootReducer,
        compose(
            applyMiddleware(thunk, logger),
            cacheEnhancer({ log: true }),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );


export default configureStore;