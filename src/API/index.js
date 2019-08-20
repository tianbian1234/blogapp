import {_axios} from '../util/axios'

export const list = (req = {}) => _axios('/get_all_blogs', req)

export const blog = (req = {}) => _axios('/get_signal_blog', req)
