import { createStore } from 'redux';
import countReducer from './reducer/count';
const store = createStore(countReducer);

export default store;
