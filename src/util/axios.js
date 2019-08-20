import axios from 'axios';

function _axios(url, params){
    url =  window['_MAX_API_'] + url;
    const args = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          url: url,
          method: 'POST',
          data: params
    }

    return axios(args).then(res => res.status == 200 ? res.data : [])
}

function _sendImg(url, params){
    url = window['_MAX_API_'] + url;
    const args = {
        headers: {
            'Content-Type': 'multipart/form-data'
          },
          url: url,
          method: 'POST',
          data: params
    }

    return axios(args).then(res => res.status == 200 ? res.data.data.code == 200 ? res.data.data.msg : [] : [])
}

export { _axios, _sendImg };