import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

function SecondaryContainer() {
    const movies = useSelector(store => store.movies)
    return (
        <div className='bg-black sm:mt-[-15rem] md:mt-[-15rem] text-white'>
            <MoviesList title={'Now Playing'} movies={movies.nowPlayingMovies} />
            <MoviesList title={'Upcoming'} movies={movies.upComingMovies} />
            <MoviesList title={'Popular'} movies={movies.popularMovies} />
            <MoviesList title={'Trending'} movies={movies.trendingMovies} />
            <MoviesList title={'Top Rated'} movies={movies.topRatedMovies} />
        </div>
    )
}

export default SecondaryContainer
