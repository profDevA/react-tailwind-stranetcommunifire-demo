import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from '../reducers';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));


store.subscribe(() => {
    console.log('store data:', store.getState());
})

export default store;