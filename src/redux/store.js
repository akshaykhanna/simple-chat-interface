import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import count from './reducer/count';
// import reducers from './reducer';
const store = createStore(count,  applyMiddleware(thunk));

export default store;
