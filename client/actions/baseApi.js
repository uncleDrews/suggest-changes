import axios from 'axios';

const baseApiUrl = '/api';

export const get = url => axios.get(`${baseApiUrl}/${url}`)
    .then(res => res.data);

export const post = (url, body) => axios.post(`${baseApiUrl}/${url}`, body)
    .then(res => res.data);

export const put = (url, body) => axios.put(`${baseApiUrl}/${url}`, body)
    .then(res => res.data);

export const del = url => axios.delete(`${baseApiUrl}/${url}`)
    .then(res => res.data);

