import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './stores/configureStore';
import { addPhoto } from './actions/photos';
import { setTitleFilter, sortByTitle, sortByDate } from './actions/filters';
import selectors from './selectors/selectors';
import 'normalize.css/normalize.css';
import './styles/style.scss';


const store = configureStore();
const duckPhoto = store.dispatch(addPhoto({
    title: 'Ducky',
    description: 'lovely photo of yellw duck',
    imgUrl: 'https://thelittleyellowduckproject.org/wp-content/uploads/2014/04/free-widescreen-animals-duckling_100458.jpg',
    createdAt: 234566,
}));
const oldMarketPhoto = store.dispatch(addPhoto({ 
    title: 'Poznań',
    description: 'lovely photo of old market in poznan city',
    imgUrl: 'https://thelittleyellowduckproject.org/wp-content/uploads/2014/04/free-widescreen-animals-duckling_100458.jpg',
    createdAt: 24567,
}));
const aPhoto = store.dispatch(addPhoto({ 
    title: 'about Duck',
    description: 'lovely photo of old market in poznan city',
    imgUrl: 'https://thelittleyellowduckproject.org/wp-content/uploads/2014/04/free-widescreen-animals-duckling_100458.jpg',
    createdAt: 24568,
}));
store.dispatch(sortByTitle());

const state = store.getState();
const visiblePhotos = selectors(state.photos, state.filters);

console.log(visiblePhotos);
ReactDOM.render(<AppRouter />, document.getElementById('app'));