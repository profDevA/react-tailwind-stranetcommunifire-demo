import dashboardDataReducer from './dashboardData';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    dashboardData: dashboardDataReducer,
});

export default rootReducer;