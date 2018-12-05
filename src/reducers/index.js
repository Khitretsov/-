import { combineReducers } from 'redux';
import item from '../components/item/reducer';
import list from '../components/list/reducer';
import app from './reducer';

export default combineReducers({
    item,
    list,
    app,
});
