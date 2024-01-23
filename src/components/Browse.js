import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useUpComingMovies from '../hooks/useUpComingMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useTrendingMovies from '../hooks/useTrendingMovies'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'



function Browse() {
    const gptOn = useSelector(store => store.gptSearch.gptToggle)

    useNowPlayingMovies()
    usePopularMovies()
    useUpComingMovies()
    useTopRatedMovies()
    useTrendingMovies()


    return (
        <div>
            <Header />
            {gptOn ? (<GptSearch />) : (<>
                <MainContainer />
                <SecondaryContainer />
            </>)}


        </div>
    )
}

export default Browse
