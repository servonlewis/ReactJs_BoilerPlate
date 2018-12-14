import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from '../Reducer/App-Reducer';

const logger = createLogger({
    collapsed: true
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
)

export default store