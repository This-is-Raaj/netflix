import React from 'react'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';

function MainContainer() {

    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    if (!movies) return;

    const mainMovie = movies[Math.floor(Math.random() * movies.length)]
    const { original_title, overview, id } = mainMovie

    return (
        <div className='h-[100%] overflow-hidden'>
            <VideoTitle originalTitle={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer
