import React, { useEffect } from 'react'
import MovieCard from './MovieCard'

export default function MovieList({ title, movies, searched = false }) {

    return (
        <div>
            <h1 className={searched ? "text-3xl font-bold py-3 text-black capitalize " : "text-3xl font-bold py-3 text-white"}>{title}</h1>
            <div className='flex overflow-x-auto no-scrollbar '>
                <div className='flex gap-4'>
                    {
                        movies?.length > 0 && movies.map(movie => (
                            <MovieCard key={movie.id} movie={movie} />

                        ))
                    }

                </div>
            </div>
        </div>
    )
}
