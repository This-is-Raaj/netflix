import React from "react";
import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";

function VideoBackground({ movieId }) {
    const trailer = useSelector(state => state.movies?.trailerVideo)
    useTrailerVideo(movieId)

    return (
        <div className="bg-gradient-to-r from-black">
            <iframe
                className=" w-screen aspect-video overflow-hidden"
                src={"https://www.youtube.com/embed/" + trailer?.key + "?&autoplay=1&mute=1"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>

        </div >
    );
}

export default VideoBackground;
