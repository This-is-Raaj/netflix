import React from 'react'
import { useSelector } from 'react-redux'
import { IMG_CDN_URL } from '../utils/constants'

function SearchMovieCard({ movie }) {
    const { poster_path, title, release_date } = movie
    const movies = useSelector(store => store.movies.searchMovies)

    if (!poster_path) return null
    console.log(movie, 'lenth');
    return (

        <div className=' w-[200px] pr-6'>
            <img src={IMG_CDN_URL + poster_path} className={`${movies.length > 7 ? 'h-[200px] w-[300px]' : 'h-[400px] w-[400px]'}`} alt="" />
            {/* <h1 className='text-white py-4' >{title}</h1> */}
            {/* <p className='text-white'>Realease Date: {release_date}</p> */}
        </div>
    )
}

export default SearchMovieCard
