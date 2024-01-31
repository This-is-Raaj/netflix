import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

function MovieCard({ movie }) {
    const { original_title, poster_path } = movie
    return (
        <div className='md:w-[200px] w-[70px] md:pr-6 cursor-pointer'>
            {/* <h1>{original_title}</h1> */}
            <img src={IMG_CDN_URL + poster_path} className='h-[100px] md:h-full' alt="" />
        </div>
    )
}

export default MovieCard
