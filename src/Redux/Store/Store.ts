import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import Reducer from '../Reducer/Reducer';
//@ts-ignore
const Store = createStore(Reducer, applyMiddleware(thunk));

export default Store;
