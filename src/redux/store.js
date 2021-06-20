import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import chats from './reducer/chats';
// import count from './reducer/count';
import reducers from './reducer';

const store = createStore(reducers,  applyMiddleware(thunk));

export default store;
