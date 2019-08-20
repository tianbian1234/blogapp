import { handleActions } from 'redux-actions';
import { List } from 'immutable';

const BLOG_SIGNAL_CONTENT = (state, action) => {
    return action.payload.data.msg
}

export default handleActions({
    BLOG_SIGNAL_CONTENT
}, List())
