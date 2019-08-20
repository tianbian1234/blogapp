import { createAction } from 'redux-actions';

import * as blog from '../API';

export const list = createAction('BLOG_LIST_GET', (params) => blog.list(params));

export const blogSignal = createAction('BLOG_SIGNAL_CONTENT', (params) => blog.blog(params))