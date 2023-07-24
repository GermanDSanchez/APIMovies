import { useState, useEffect } from "react";

export default function useFetchDetails (idMovie, url) {

    const [detailsMovie, setDetailsMovie] = useState(null);

    const [detailsSeries, setDetailsSeries] = useState(null);

    const [videos, setVideos] = useState(null);

    const [seasons, setSeasons] = useState(null);

    function fetchDetailsMovie(url) {
    fetch(url)
        .then((response) => response.json())
        .then((detailsMovie) => setDetailsMovie(detailsMovie));
    }

    useEffect(() => {
        if(idMovie !== null)
        {
            fetchDetailsMovie(url)
        }
    }, [idMovie, url])

    function fetchDetailsSeries(url) {
        fetch(url)
            .then((response) => response.json())
            .then((detailsSeries) => setDetailsSeries(detailsSeries));
        }
    
        useEffect(() => {
            if(idMovie !== null)
            {
                fetchDetailsSeries(url)
            }
        }, [idMovie, url])

    function fetchVideos(url) {
        fetch(url)
            .then((response) => response.json())
            .then((videos) => setVideos(videos.results));
        }
    
    useEffect(() => {
        if(idMovie !== null)
        {
            fetchVideos(url)
        }
    }, [idMovie, url])

    function fetchSeasons(url) {
        fetch(url)
            .then((response) => response.json())
            .then((seasons) => setSeasons(seasons.episodes));
        }
    
    useEffect(() => {
        if(idMovie !== null)
        {
            fetchSeasons(url)
        }
    }, [idMovie, url])

    return {detailsMovie, videos, detailsSeries, seasons}
}