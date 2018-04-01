import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
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
    imgUrl: 'http://t-eska.cdn.smcloud.net/regionalna/t/2/t/image/9484c97ce2c6fb94129d4d4f2988f9deiVBcqJ5z-pozn.jpg/ru-0-r-660,660-q-80-n-9484c97ce2c6fb94129d4d4f2988f9deiVBcqJ5zpozn.jpg',
    createdAt: 24567,
}));
const aPhoto = store.dispatch(addPhoto({ 
    title: 'about Duck',
    description: 'nice duck',
    imgUrl: 'https://deltadailynews.com/wp-content/uploads/2016/06/ddn-duck.jpg',
    createdAt: 24568,
}));
store.dispatch(setTitleFilter('duck'));
store.dispatch(sortByTitle());

const state = store.getState();
const visiblePhotos = selectors(state.photos, state.filters);

console.log(visiblePhotos);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));