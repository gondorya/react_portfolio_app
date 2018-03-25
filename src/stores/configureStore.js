import { createStore, combineReducers } from 'redux';
import photosReducer from '../reducers/photos';
import filterReducer from '../reducers/filters';

export default () => {
    const store = createStore(
        combineReducers({
            photos: photosReducer,
            filters: filterReducer
        })
    );
    
    return store;
};