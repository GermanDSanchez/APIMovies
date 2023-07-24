import useFetchDetails from "../../useFetchDetails"
import useFetch from "../../useFetch"
import { ButtonAdd } from "../icons/ButtonAdd"
import Star from "../icons/Star"
import ButtonClose from "../icons/ButtonClose"

// eslint-disable-next-line react/prop-types
export function Description ({ descriptionIdMovie, idMovieChange, idMovie }) {

    const {detailsMovie} = useFetchDetails(descriptionIdMovie, `https://api.themoviedb.org/3/movie/${descriptionIdMovie}?api_key=e3ae20ad68ddb781c61e238b5a11eb5d&language=es-MX`)

    const {similar} = useFetch(`https://api.themoviedb.org/3/discover/movie?api_key=e3ae20ad68ddb781c61e238b5a11eb5d&language=es-MX&sort_by=popularity.desc&&with_genres=${detailsMovie?.genres[0].id ? detailsMovie?.genres[0].id : ''}`)

    const {videos} = useFetchDetails(idMovie, `https://api.themoviedb.org/3/movie/${idMovie}/videos?api_key=e3ae20ad68ddb781c61e238b5a11eb5d&language=es-ES`)

    const similarMoviesOriginal = similar?.slice(0, 13);

    const similarMovies = similarMoviesOriginal?.filter((element) => element?.title !== detailsMovie?.title);

    return (
        <>
        {descriptionIdMovie !== null ? 
        <section className="absolute w-full top-8 left-0 flex justify-center z-50">
            <div className="w-[950px] fixed rounded-lg bg-description h-full overflow-y-auto scrollbar scrollbar-none">
                <div>
                    <button className="absolute right-4 top-4 bg-black p-2 rounded-full z-50" onClick={() => idMovieChange(null)}>
                        <ButtonClose />
                    </button>
                    {videos && detailsMovie && videos.find((video) => video.type === "Trailer")?.key ? 
                    (<lite-youtube style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${detailsMovie.backdrop_path}')` }} 
                    videoid={videos.find((video) => video.type === "Trailer")?.key} params="enablejsapi=1&vq=hd1080&controls=0"></lite-youtube>) : 
                    <img src={`https://image.tmdb.org/t/p/original${detailsMovie?.backdrop_path}`} />}
                </div>
                <div className="px-12 py-3 flex justify-between">
                    <div className="w-3/5 text-white font-semibold">
                        <h3 className="font-bold text-lg">{detailsMovie?.title}</h3>
                        <div className="py-3 w-32 flex justify-between">
                            <span className="text-zinc-400">{String(detailsMovie?.release_date).substring(0, 4)}</span>
                            <span className="text-zinc-400">{detailsMovie?.runtime} min</span>
                        </div>
                        <p className="font-bold">{detailsMovie?.overview}</p>
                    </div>
                    <div className="ml-3">
                        <p className="text-zinc-400">Géneros:
                            <span className="text-white">
                            {detailsMovie && detailsMovie.genres && detailsMovie.genres[0] ? ' ' + detailsMovie.genres[0].name + ', ' : ''}
                            {detailsMovie && detailsMovie.genres && detailsMovie.genres[1] ? detailsMovie.genres[1].name : ''}
                            {detailsMovie && detailsMovie.genres && detailsMovie.genres[2] ? ', ' + detailsMovie.genres[2].name : ''}
                            </span>               
                        </p>
                    </div>
                </div>
                <div className="mb-10 px-11 py-1">
                    <h3 className="text-white font-bold text-2xl my-4 mx-2">Peliculas similares</h3>
                    <div className="flex flex-wrap">
                        {similarMovies && similarMovies.map((similar) => (
                            <div key={similar.id} className="mx-2 h-96 bg-red-950 mb-6 w-[265px] text-zinc-300 rounded-md overflow-hidden hover:scale-105 hover:transition-all transition-all">
                                <div className="relative">
                                    {similar.backdrop_path ?
                                    <img src={`https://image.tmdb.org/t/p/original${similar.backdrop_path}`} alt={similar.title}/> : <div className="h-[150px] bg-neutral-800">NOT IMAGE</div>}
                                    <div className="absolute top-0 right-0 flex p-1">
                                        <span className="font-bold text-red-500 mx-1">{String(similar.vote_average).substring(0, 3)}</span>
                                        <Star fill="#EF4444"/>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <div className="flex justify-between">
                                        <span className="text-base">{similar.title}</span>
                                        <ButtonAdd />
                                    </div>
                                    <span className="text-zinc-400">{String(similar.release_date).substring(0, 4)}</span>
                                    <p className="text-sm">{similar.overview.length > 200 ? similar.overview.slice(0, 200) + '...' : similar.overview}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section> : ''}
        </>
    )

}