import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

function MovieCard({ movie }) {
    const { original_title, poster_path } = movie
    return (
        <div className='w-[200px] pr-6'>
            {/* <h1>{original_title}</h1> */}
            <img src={IMG_CDN_URL + poster_path} alt="" />
        </div>
    )
}

export default MovieCard
