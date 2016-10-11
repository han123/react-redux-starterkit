import { combineReducers } from 'redux';
import simplelist from './simplelistReducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    simplelist,
    routing: routerReducer
});