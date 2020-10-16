import { createStore } from 'redux';
import reducer from './reducers/searchReducer';

const Store = createStore(reducer);

export default Store;
