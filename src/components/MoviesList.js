import React from 'react'
import MovieCard from './MovieCard'

function MoviesList({ title, movies }) {

    return (
        <>
            <div className='px-16 py-6'>
                <h1 className='text-2xl font-bold mb-2'>{title}</h1>
                <div className=' flex overflow-scroll no-scrollbar'>
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
