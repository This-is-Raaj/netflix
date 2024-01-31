import React from 'react'
import MovieCard from './MovieCard'

function MoviesList({ title, movies }) {

    return (
        <>
            <div className='py-2 md:py-6'>
                <h1 className='md:text-2xl text-[10px] mb-[5px] mt-[1rem] md:mt-0 pl-[0.5rem] md:pl-[2rem] font-bold md:mb-2'>{title}</h1>
                <div className=' flex overflow-scroll  no-scrollbar'>
                    {movies ? (
                        <div className='flex '>
                            {movies.map((movie) => (
                                <MovieCard key={movie.id} movie={movie} />
                            ))}
                        </div>
                    ) : (
                        <p>No movies available</p>)}
                </div>
            </div>
        </>

    )
}

export default MoviesList
