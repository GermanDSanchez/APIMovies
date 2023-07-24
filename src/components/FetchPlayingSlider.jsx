import useFetch from '../useFetch';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectCoverflow } from 'swiper';
import { useState } from 'react';

export function FetchPlayingSlider () {

  const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=e3ae20ad68ddb781c61e238b5a11eb5d&language=es-AR'

  const {data} = useFetch(url)

  const [selectedMovieIndex, setSelectedMovieIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setSelectedMovieIndex(swiper.realIndex);
  };

  return (
    <div className='flex items-center justify-center'>
      <div className='flex flex-wrap absolute w-full h-screen top-0 left-0'>
        {data && data.map((imagen) => 
        (<img key={imagen.title} className="w-1/5 blur-sm opacity-50" src={`https://www.themoviedb.org/t/p/original${imagen.backdrop_path}`} alt="" />
        ))} 
      </div>
      <div className='absolute w-1/3 text-gray-50 flex flex-col left-20 p-6 bg-red-950 shadow-lg shadow-red-950 z-10'>
        {data && (<span className='pb-6 text-3xl'>{data[selectedMovieIndex].title}</span>)}
        {data && (<p className='text-2xl'>{data[selectedMovieIndex].overview}</p>)}
      </div>
      <div className='w-[1175px] overflow-hidden'>
        <Swiper className='right-[412px] w-[2000px]' spaceBetween={0} slidesPerView={4} loop={true} grabCursor={true} centeredSlides={true} modules={[EffectCoverflow]}  
        effect='coverflow' coverflowEffect={{
            rotate: 0,
            stretch: 75,
            depth: 110,
            modifier: 3,
            slideShadows: true
          }}
          onSlideChange={handleSlideChange}
        >
          {data && data.map((pelicula, index) => (
              <SwiperSlide key={index}>
                <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt='Pelicula estrenada'/>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}