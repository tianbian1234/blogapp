import { handleActions } from 'redux-actions';
import { List } from 'immutable';

const BLOG_LIST_GET = (state, action) => {
    return action.payload.data.msg
}

export default handleActions({
    BLOG_LIST_GET
}, List())
