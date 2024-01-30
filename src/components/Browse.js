import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useUpComingMovies from '../hooks/useUpComingMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useTrendingMovies from '../hooks/useTrendingMovies'
import { useSelector } from 'react-redux'
import SearchMoviesPage from './SearchMoviesPage'



function Browse() {
    const searchMovies = useSelector(store => store.movies.searchMoviesInput)
    useNowPlayingMovies()
    usePopularMovies()
    useUpComingMovies()
    useTopRatedMovies()
    useTrendingMovies()


    return (
        <div>
            <Header />
            {!searchMovies && <>
                <MainContainer />
                <SecondaryContainer />
            </>}
            {searchMovies && <SearchMoviesPage />}




        </div>
    )
}

export default Browse
