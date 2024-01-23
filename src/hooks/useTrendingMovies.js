import { useDispatch } from "react-redux"
import { addTrendingMovies } from "../utils/moviesSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"

const useTrendingMovies = () => {
    const dispatch = useDispatch()

    const getTrendingMovies = async () => {
        const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=1', API_OPTIONS)
        const data = await res.json()
        dispatch(addTrendingMovies(data.results))
    }

    useEffect(() => {
        getTrendingMovies()
    }, [])
}

export default useTrendingMovies;