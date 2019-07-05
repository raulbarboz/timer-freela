import { combineReducers } from 'redux';
import tasks from './tasks';
import entry from './entry';
export default combineReducers({
    tasks,
    entry
});