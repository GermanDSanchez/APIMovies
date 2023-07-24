import useFetch from "../../useFetch";
import { ButtonAdd } from "../icons/ButtonAdd";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState, useRef } from "react";
import { ButtonLike } from "../icons/ButtonLike";
import { ButtonPlay } from "../icons/ButtonPlay";
import { ButtonMoreInfo } from "../icons/ButtonMoreInfo";
import useFetchDetails from "../../useFetchDetails";
import Star from "../icons/Star";

// eslint-disable-next-line react/prop-types
export function FetchSlidersMovies ({ sectionTitle, numero, url, onIdMovieChange, idMovie, idMovieChange }) {

    const {data} = useFetch(url)

    const [indexDesc, setIndexDesc] = useState(null)

    const {detailsMovie} = useFetchDetails(idMovie, `https://api.themoviedb.org/3/movie/${idMovie}?api_key=e3ae20ad68ddb781c61e238b5a11eb5d&language=es-AR`)

    const timerIdRef = useRef(null);

    const handleMouseEnter = (pelicula, index, event) => {
        if (event.currentTarget.contains(event.target)) {
            timerIdRef.current = setTimeout(() => {
                setIndexDesc(index);
                onIdMovieChange(pelicula.id);
            }, 300);
        }
    };
  
    const handleMouseLeave = () => {
        clearTimeout(timerIdRef.current);
        setIndexDesc(null);
    };

    return (
        <div>
            <h3 className="text-2xl font-semibold font-serif text-gray-50 p-3 pl-16">{sectionTitle}</h3>
            <Swiper className="ml-14 overflow-visible" slidesPerView={8.2}>
            {data && data.map((pelicula, index) => (
                <SwiperSlide className="cursor-pointer" key={index + {numero}}>
                    <div className={`transition-all duration-300 ${indexDesc === index ? 'scale-125' : ''}`} onMouseEnter={(event) => handleMouseEnter(pelicula, index, event)} onMouseLeave={handleMouseLeave}>
                        <img className="relative p-1 -z-10 rounded-xl" src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`} alt={pelicula.title}/>                 
                        {index === indexDesc && 
                        <div className="w-44 absolute bg-red-950 top-1 left-1 rounded-l-md flex shadow-lg shadow-black h-[20.4rem]">
                            <div className="flex flex-col justify-between p-2 text-base text-gray-50 rounded-r-md">
                                <h3>{pelicula.title}</h3> 
                                <div className="flex items-center">
                                    <Star fill="#FFFF"/>
                                    <span className="ml-1">{pelicula.vote_average}</span>
                                </div>
                                <p className="text-gray-500">
                                {detailsMovie ? detailsMovie.runtime : ''} min
                                </p>
                                <ul>
                                {detailsMovie && detailsMovie.genres && detailsMovie.genres[0] ? <li>●  {detailsMovie.genres[0].name}</li> : ''}
                                {detailsMovie && detailsMovie.genres && detailsMovie.genres[1] ? <li>●  {detailsMovie.genres[1].name}</li> : ''}
                                {detailsMovie && detailsMovie.genres && detailsMovie.genres[2] ? <li>●  {detailsMovie.genres[2].name}</li> : ''}
                                </ul>
                                <span className="text-gray-500">{pelicula.release_date}</span>
                                <div className="flex flex-row justify-between">
                                    <ButtonPlay />
                                    <ButtonAdd />
                                    <ButtonLike />
                                    <div onClick={() => idMovieChange(data[index].id)}>
                                        <ButtonMoreInfo />
                                    </div>
                                </div>
                            </div>
                        </div>}
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}