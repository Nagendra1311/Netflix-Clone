import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

export default function MainContainer({ user }) {
    const movie = useSelector(store => store?.movie.singleMovie)
    if (!movie) return;
    const { id, overview, title } = movie



    return (
        <div>

            <VideoTitle title={title} overview={overview} />
            <VideoBackground id={id} />
        </div>
    )
}
