import React from 'react'
import useMovieById from '../hooks/useMovieById'
import { useSelector } from 'react-redux'

export default function VideoBackground({ id }) {
    const trailer = useSelector(store => store.movie.trailerMovie);

    useMovieById(id)

    return (
        <div className='w-[vw] overflow-hidden '>
            <iframe
                className='w-screen aspect-video'
                src={`https://www.youtube.com/embed/${trailer?.key}?si=jUYSCBGKbVjr8oOW&autoplay=1&mute=1`}
                title="YouTube video player"
                allowFullScreen
                frameBorder='0'
            ></iframe>
        </div>
    )
}

// "https://www.youtube.com/embed/SqSiUVUvVCE?si=rPW3n8YKwa3ZG-oU"
// trailer ?  :

// <iframe width="560" height="315" src="https://www.youtube.com/embed/SqSiUVUvVCE?si=rPW3n8YKwa3ZG-oU"
// title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
