import React, { useState } from 'react'
import axios from 'axios';
import { options } from './../utilis/constant';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchMovie } from '../redux/reducers/Search.reducer';
import MovieList from './MovieList';

export default function Search() {
    const [searchMovie, setSearchMovie] = useState("");
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { movieName, searchedMovie } = useSelector(store => store.search)

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchMovie}&include_adult=false&language=en-US&page=1`, options)
            console.log(res.data.results);
            const movie = res.data.results
            dispatch(getSearchMovie({ searchMovie, movie }))
        } catch (error) {

        } finally {
            setLoading(false)
        }
        setSearchMovie(' ')
    }

    return (
        <>
            <div className='flex justify-center pt-[10%] w-[100%]'>
                <form onSubmit={submit} className='w-[50%]'>
                    <div className='flex justify-between shadow-md border-2 p-2 border-gray-200 rounded-lg w-[100%]'>
                        <input className='w-full outline-none rounded-md text-lg' value={searchMovie} onChange={(e) => setSearchMovie(e.target.value)} type="text" placeholder='Search Movies...' />
                        <button className='bg-red-800 text-white rounded-md px-4 py-2'>{loading ? "Loading...." : "Search"}</button>
                    </div>
                </form>

            </div>
            <MovieList title={movieName} searched={true} movies={searchedMovie} />
        </>
    )
}
