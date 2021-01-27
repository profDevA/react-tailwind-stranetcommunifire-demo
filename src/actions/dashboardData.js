import axios from 'axios';
import { ADD_BLOCKED_URLS } from '../types';
import { API_BASEURL } from '../constants';

const CORS_URL = 'https://cors-anywhere.herokuapp.com/';

export const getBlockedUrls = () => {
    console.log('action creator');
    return (dispatch) => {
        // axios.post(API_BASEURL + "get_blocked_urls/", {lookup_days: 10}).then((response) => {
        //     console.log(response.data);
        //     dispatch(addBlockedUrls(response.data.results));
        // });

        axios({
            method: 'get',
            headers: {
                Accept: '*/*',
                'Content-type': 'application/json'
            },
            url: CORS_URL + API_BASEURL + "get_blocked_urls/",
            data: {
                lookup_days: 10
            }
        })
        .then((response) => console.log(response.data))
        .catch(err => console.log(err))
    };
};

export const addBlockedUrls = (data) => {
    console.log('add users function')
    return {
        type: ADD_BLOCKED_URLS,
        data
    };
};