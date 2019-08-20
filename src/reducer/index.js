import { combineReducers } from 'redux-immutable';

const test = (state = [], action) => {
    return state;
}

import blog from './blog';
import signalBlog from './signalBlog';


export default combineReducers({
    test,
    blog,
    signalBlog
})