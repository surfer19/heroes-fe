import { createStore, compose, applyMiddleware } from 'redux'
import { cacheEnhancer } from 'redux-cache'
import thunk from 'redux-thunk'
import { rootReducer } from './reducer'

const configureStore = () => 
    createStore(
        rootReducer,
        compose(
            applyMiddleware(thunk),
            cacheEnhancer({ log: true }),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );


export default configureStore;