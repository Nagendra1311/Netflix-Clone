import React from 'react'
import { Tmdb_Image_Path } from '../utilis/constant'
import { useDispatch } from 'react-redux'
import { getSingleMovie } from '../redux/reducers/Movies.reducer'

export default function MovieCard({ movie }) {
    const dispatch = useDispatch();

    const openMovie = (data) => {
        dispatch(getSingleMovie(data))

    }
    return (
        <div className='w-48 m-1 cursor-pointer' onClick={() => openMovie(movie)}>
            <img src={`${Tmdb_Image_Path}/${movie.poster_path}`} alt="image" />
        </div>
    )
}
