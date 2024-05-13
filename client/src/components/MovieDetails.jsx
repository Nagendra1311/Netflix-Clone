import React from 'react'
import { useSelector } from 'react-redux';

export default function MovieDetails() {
    const trailer = useSelector(store => store.movie.trailerMovie);

    return (
        <div className='h-screen flex justify-center pt-[5%] w-[100%] bg-black'>

            <iframe
                className='w-[90vh] aspect-video'
                src={`https://www.youtube.com/embed/${trailer?.key}?si=jUYSCBGKbVjr8oOW&autoplay=1&mute=1`}
                title="YouTube video player"
                allowFullScreen
                frameBorder='0'
            ></iframe>
        </div>
    )
}
