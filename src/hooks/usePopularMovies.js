import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
    const disapatch = useDispatch()

    const getPopularMovies = async () => {
        const res = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
        const data = await res.json()
        disapatch(addPopularMovies(data.results))
    }

    useEffect(() => {
        getPopularMovies()
    }, [])

}

export default usePopularMovies;