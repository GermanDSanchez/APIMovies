import useFetch from "../../useFetch";
import { ButtonAdd } from "../icons/ButtonAdd";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState, useRef } from "react";
import { ButtonLike } from "../icons/ButtonLike";
import { ButtonPlay } from "../icons/ButtonPlay";
import { ButtonMoreInfo } from "../icons/ButtonMoreInfo";
import useFetchDetailsMovie from "../../useFetchDetails";
import Star from "../icons/Star";

// eslint-disable-next-line react/prop-types
export function FetchSlidersSeries ({ sectionTitle, numero, url, onIdSerieChange, idSerie, idSerieChange }) {

    const {data} = useFetch(url)

    const [indexDesc, setIndexDesc] = useState(null)

    const {detailsSeries} = useFetchDetailsMovie(idSerie, `https://api.themoviedb.org/3/tv/${idSerie}?api_key=e3ae20ad68ddb781c61e238b5a11eb5d&language=es-AR`)

    const timerIdRef = useRef(null);

    const handleMouseEnter = (serie, index, event) => {
        if (event.currentTarget.contains(event.target)) {
            timerIdRef.current = setTimeout(() => {
                setIndexDesc(index);
                onIdSerieChange(serie.id);
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
            {data && data.map((serie, index) => (
                <SwiperSlide className="cursor-pointer" key={index + {numero}}>
                    <div className={`transition-all duration-300 ${indexDesc === index ? 'scale-125' : ''}`} onMouseEnter={(event) => handleMouseEnter(serie, index, event)} onMouseLeave={handleMouseLeave}>
                        <img className="relative p-1 -z-10 rounded-xl" src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`} alt={serie.name}/>                 
                        {index === indexDesc && 
                        <div className="w-44 absolute bg-red-950 top-1 left-1 rounded-l-md flex shadow-lg shadow-black h-[20.4rem]">
                            <div className="flex flex-col justify-between p-2 text-base text-gray-50 rounded-r-md">
                                <h3>{serie.name}</h3> 
                                <div className="flex items-center">
                                    <Star fill="#FFFF"/>
                                    <span className="ml-1">{detailsSeries?.vote_average.toFixed(1)}</span>
                                </div>
                                {detailsSeries && detailsSeries.type === 'Miniseries' ? <span>Miniserie</span> : 
                                <span>{detailsSeries ? detailsSeries.number_of_seasons : ''} Temporadas</span>}
                                <ul>
                                {detailsSeries && detailsSeries.genres && detailsSeries.genres[0] ? <li>●  {detailsSeries.genres[0].name}</li> : ''}
                                {detailsSeries && detailsSeries.genres && detailsSeries.genres[1] ? <li>●  {detailsSeries.genres[1].name}</li> : ''}
                                {detailsSeries && detailsSeries.genres && detailsSeries.genres[2] ? <li>●  {detailsSeries.genres[2].name}</li> : ''}
                                </ul>
                                <span className="text-gray-500">{serie.first_air_date}</span>
                                <div className="flex flex-row justify-between">
                                    <ButtonPlay />
                                    <ButtonAdd />
                                    <ButtonLike />
                                    <div onClick={() => idSerieChange(data[index].id)}>
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