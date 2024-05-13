import { createSlice } from "@reduxjs/toolkit";

const searchReducer = createSlice({
    name: "search",
    initialState: {
        movieName: '',
        searchedMovie: null
    },
    reducers: {
        getSearchMovie: (state, action) => {
            const { searchMovie, movie } = action.payload
            state.movieName = searchMovie;
            state.searchedMovie = movie
        }
    }

})
export const { getSearchMovie } = searchReducer.actions;

export default searchReducer.reducer