import { createSlice } from "@reduxjs/toolkit";

let PreviousTrailerMovie = localStorage.getItem('trailerMovie') && localStorage.getItem('trailerMovie') !== "undefined" ? JSON.parse(localStorage.getItem('trailerMovie')) : null
const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovie: null,
        popularMovie: null,
        topRatedMovie: null,
        upcomingMovie: null,
        toggle: false,
        trailerMovie: PreviousTrailerMovie ?? null,
        singleMovie: {
            id: 775821,
            overview: "David Spade, Fortune Feimster and London Hughes welcome guests from Tiger King, Emily in Paris",
            title: "The Netflix Afterparty: The Best Shows of The Worst Year",

        },

    },
    reducers: {
        getNowPlayingMovies: (state, action) => {
            state.nowPlayingMovie = action.payload;
        },
        getPopularMovies: (state, action) => {
            state.popularMovie = action.payload;
        },
        getTopRatedMovie: (state, action) => {
            state.topRatedMovie = action.payload;
        },
        getUpcomingMovie: (state, action) => {
            state.upcomingMovie = action.payload;
        },
        setToogle: (state) => {
            state.toggle = !state.toggle;
        },
        getTrailerMovie: (state, action) => {
            localStorage.setItem('trailerMovie', JSON.stringify(action.payload))

            state.trailerMovie = action.payload;
        },
        getSingleMovie: (state, action) => {
            state.singleMovie = action.payload;
        },
    }
})

export const { getNowPlayingMovies, getPopularMovies, getTopRatedMovie, getUpcomingMovie, setToogle, getTrailerMovie, getSingleMovie } = movieSlice.actions;

export default movieSlice.reducer