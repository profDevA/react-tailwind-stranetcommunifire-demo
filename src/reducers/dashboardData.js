
import { ADD_BLOCKED_URLS } from '../types';

const dashboardDataReducer = (state = [], action) => {
    console.log('dashboard Data reducer', action)
    switch (action.type) {
        case ADD_BLOCKED_URLS:
            return [...state, ...action.data];
        default:
            return state;
    }
};

export default dashboardDataReducer;