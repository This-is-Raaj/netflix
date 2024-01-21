import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";


const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch()

    const getMovieTrailer = async () => {
        const res = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos`,
            API_OPTIONS
        );
        const data = await res.json();
        const filteredTrailer = data?.results.filter(
            (movie) => movie.type === "Trailer"
        );
        const movieTrailer = filteredTrailer ? filteredTrailer[0] : data.results[0];

        dispatch(addTrailerVideo(movieTrailer))

    };
    useEffect(() => {
        getMovieTrailer();
    }, []);
}

export default useTrailerVideo;