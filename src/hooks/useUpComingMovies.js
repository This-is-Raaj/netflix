import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addUpcomingMovies } from "../utils/moviesSlice"
import { useEffect } from "react"

const useUpComingMovies = () => {
    const dispatch = useDispatch()

    const getUpComingMovies = async () => {
        const res = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=5', API_OPTIONS)
        const data = await res.json()
        dispatch(addUpcomingMovies(data.results))
    }

    useEffect(() => {
        getUpComingMovies()
    }, [])
}


export default useUpComingMovies;