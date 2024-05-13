import { configureStore } from '@reduxjs/toolkit'
import UserReducer from '../reducers/UserReducer';
import MoviesReducer from '../reducers/Movies.reducer';
import SearchReducer from '../reducers/Search.reducer';

const store = configureStore({
    reducer: {
        app: UserReducer,
        movie: MoviesReducer,
        search: SearchReducer

    }
})

export default store;