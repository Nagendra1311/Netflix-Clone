import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovie';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovie';
import Search from './Search';

export default function Browse() {
    const user = useSelector((store) => store.app.user)
    const toggle = useSelector((store) => store.movie.toggle)
    const navigate = useNavigate();

    useNowPlayingMovies()
    usePopularMovies();
    useTopRatedMovies()
    useUpcomingMovies()

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, []);
    return (
        <div>
            {
                toggle ? <Search /> : (
                    <>

                        <MainContainer />
                        <MovieContainer />

                    </>
                )
            }
        </div>
    )
}
