import { Header } from './components/Header/Header';
import { FetchPlayingSlider } from './components/FetchPlayingSlider';
import { FetchSlidersMovies } from './components/FetchSlidersMovies/FetchSlidersMovies';
import { FetchSlidersSeries } from './components/FetchSlidersSeries/FetchSlidersSeries';
import { useState } from 'react';
import { Description } from './components/FetchSlidersMovies/Description';
import { DescriptionSeries } from './components/FetchSlidersSeries/DescriptionSeries';

export function App() {

  const [idMovie, setIdMovie] = useState(null);

  const [idSerie, setIdSerie] = useState(null);

  const [descriptionIdMovie, setDescriptionIdMovie] = useState(null);

  const [descriptionIdSerie, setDescriptionIdSerie] = useState(null);

  const handleIdMovieChange = (idMovie) => {
    setIdMovie(idMovie);
  }

  const idMovieChange = (descriptionIdMovie) => {
    setDescriptionIdMovie(descriptionIdMovie);
  }

  const handleIdSerieChange = (idSerie) => {
    setIdSerie(idSerie);
  }

  const idSerieChange = (descriptionIdSerie) => {
    setDescriptionIdSerie(descriptionIdSerie);
  }

    return (
      <main className='h-full bg-background relative'>
        <div className={descriptionIdMovie !== null || descriptionIdSerie !== null ? 'opacity-30 pointer-events-none' : undefined}>
        <Header />
        </div>
        <section className={`px-20 ${descriptionIdMovie !== null || descriptionIdSerie !== null ? 'opacity-30 pointer-events-none' : undefined}`}>
          <div className='h-screen flex items-center justify-end'>
              <FetchPlayingSlider />
          </div>
        </section>
        <section className={descriptionIdMovie !== null || descriptionIdSerie !== null ? 'opacity-30 pointer-events-none' : undefined}>
          <div className='overflow-hidden h-[90rem] flex flex-col justify-evenly'>
            <FetchSlidersMovies 
            idMovieChange={idMovieChange} 
            onIdMovieChange={handleIdMovieChange} 
            idMovie={idMovie} 
            url={'https://api.themoviedb.org/3/movie/popular?api_key=e3ae20ad68ddb781c61e238b5a11eb5d&language=es-AR'} 
            sectionTitle={'Más populares'} 
            numero={20}
            />
            <FetchSlidersMovies 
            idMovieChange={idMovieChange} 
            onIdMovieChange={handleIdMovieChange} 
            idMovie={idMovie} 
            url={'https://api.themoviedb.org/3/movie/top_rated?api_key=e3ae20ad68ddb781c61e238b5a11eb5d&language=es-AR'} 
            sectionTitle={'Mejor puntuados'} 
            numero={40}
            />
            <FetchSlidersSeries 
            idSerieChange={idSerieChange} 
            onIdSerieChange={handleIdSerieChange} 
            idSerie={idSerie} 
            url={'https://api.themoviedb.org/3/trending/tv/week?api_key=e3ae20ad68ddb781c61e238b5a11eb5d&language=es-AR'} 
            sectionTitle={'Series en tendencia'} 
            numero={40}
            />
          </div>
        </section>
        <Description descriptionIdMovie={descriptionIdMovie} idMovieChange={idMovieChange} idMovie={idMovie}/>
        <DescriptionSeries descriptionIdSerie={descriptionIdSerie} idSerieChange={idSerieChange} idSerie={idSerie}/>
      </main>
  );
}






