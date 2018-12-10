import { combineReducers } from 'redux';
import item from '../components/item/reducer';
import list from '../components/list/reducer';
import header from '../components/header/reducer';

export default combineReducers({
    item,
    list,
    header,
});
