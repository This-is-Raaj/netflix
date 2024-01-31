import React from 'react'
import SearchMovieCard from './SearchMovieCard'
import { useSelector } from 'react-redux'

function SearchMoviesPage() {
    const movies = useSelector(store => store.movies.searchMovies)
    const movie = useSelector(store => store.movies.searchMovie)
    return (
        <div className=' pt-[4rem] md:pt-[10rem] '>
            {movies && <h1 className='text-lg md:text-3xl text-white text-center py-[2rem] font-bold mb-2'>{movie ? `Search results for ${movie}` : ''}</h1>}
            <div className=' flex overflow-x-scroll overflow-y-hidden  no-scrollbar'>
                {movies ? (
                    <div className='flex h-[250px] '>
                        {movies.map((movie) => (
                            <SearchMovieCard key={movie.id} movie={movie} />
                        ))}
                    </div>
                ) : (
                    <p>No movies available</p>)}
            </div>

        </div>
    )
}

export default SearchMoviesPage
