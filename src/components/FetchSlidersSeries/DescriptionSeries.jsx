import useFetchDetails from "../../useFetchDetails"
import ButtonClose from "../icons/ButtonClose"
import { useState } from "react"

// eslint-disable-next-line react/prop-types
export function DescriptionSeries ({ descriptionIdSerie, idSerieChange, idSerie }) {

    const [season, setSeason] = useState(1)

    const [menu, setMenu] = useState(false)

    const {detailsSeries} = useFetchDetails(descriptionIdSerie, `https://api.themoviedb.org/3/tv/${descriptionIdSerie}?api_key=e3ae20ad68ddb781c61e238b5a11eb5d&language=es-MX`)

    const {videos} = useFetchDetails(idSerie, `https://api.themoviedb.org/3/tv/${idSerie}/videos?api_key=e3ae20ad68ddb781c61e238b5a11eb5d&language=es-MX`)

    const {seasons} = useFetchDetails(descriptionIdSerie, `https://api.themoviedb.org/3/tv/${descriptionIdSerie}/season/${season}?api_key=e3ae20ad68ddb781c61e238b5a11eb5d&language=es-ES`)

    let array = []

    for (let i = 0; i < detailsSeries?.number_of_seasons; i++)
    {
        array.push(i);
    }
    
    return (
        <>
        {descriptionIdSerie !== null ? 
        <section className="absolute w-full top-8 left-0 flex justify-center z-50 text-white">
            <div className="w-[950px] fixed rounded-lg bg-description h-full overflow-y-auto scrollbar scrollbar-none">
                <div>
                    <button className="absolute right-4 top-4 bg-black p-2 rounded-full z-50" onClick={() => idSerieChange(null)}>
                        <ButtonClose />
                    </button>
                    {detailsSeries && videos.find((video) => video.type === "Trailer")?.key ? 
                    (<lite-youtube style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${detailsSeries.backdrop_path}')` }} 
                    videoid={videos.find((video) => video.type === "Trailer")?.key} params="enablejsapi=1&vq=hd1080&controls=0"></lite-youtube>) : 
                    <img src={`https://image.tmdb.org/t/p/original${detailsSeries?.backdrop_path}`} />}
                </div>
                <div className="px-12 py-3 flex justify-between">
                    <div className="w-3/5 font-semibold">
                        <h3 className="font-bold text-lg">{detailsSeries?.name}</h3>
                        <div className="py-3 flex">
                            <span className="text-zinc-400">{String(detailsSeries?.first_air_date).substring(0, 4)}</span>
                            <span className="text-zinc-400 ml-10">{detailsSeries && detailsSeries.type === 'Miniseries' ? 'Miniserie' : detailsSeries?.number_of_seasons + ' Temporadas'}</span>
                        </div>
                        <p className="font-bold">{detailsSeries?.overview}</p>
                    </div>
                    <div className="ml-3 w-64 py-3">
                        <p className="text-zinc-400">Director: <span className="text-white">{detailsSeries && detailsSeries.created_by && detailsSeries.created_by[0]?.name ? detailsSeries.created_by[0].name : 'Sin Datos'}</span></p>
                        <p className="text-zinc-400 mt-3">Géneros:
                            <span className="text-white">
                            {detailsSeries && detailsSeries.genres && detailsSeries.genres[0] ? ' ' + detailsSeries.genres[0].name + ', ' : ''}
                            {detailsSeries && detailsSeries.genres && detailsSeries.genres[1] ? detailsSeries.genres[1].name : ''}
                            {detailsSeries && detailsSeries.genres && detailsSeries.genres[2] ? ', ' + detailsSeries.genres[2].name : ''}
                            </span>               
                        </p>
                    </div>
                </div>
                <div className="flex text-xl font-semibold px-12 mt-10 justify-between relative">
                    <h3 className="text-2xl">Episodios</h3>
                    {array.length > 1 ? <button className="border-[1px] border-zinc-400 p-2 rounded-sm bg-zinc-800" onClick={() => setMenu(!menu)}>Temporadas</button> : ''}
                    {menu && <div className="absolute right-12 top-14 bg-zinc-800 p-2">
                        {array?.map((season, index) => (
                            <div className="p-1" key={index}>
                                <button onClick={() => {setSeason(season + 1); setMenu(false)}} className="py-1">
                                    {`Temporada ${season + 1}`}
                                    <span className="text-base"> ({seasons[seasons.length - 1].episode_number} Episodios)</span>
                                </button>
                            </div>
                        ))}
                    </div>}
                </div>
                <div className="px-12 pt-6 pb-12">
                    {seasons?.map((episode) => (
                        <div key={episode.id} className={`${episode.runtime === null ? 'opacity-40' : ''}`}>
                        <hr />
                        <div className="flex items-center py-5 w-full h-40 hover:scale-105 transition-all cursor-pointer">
                            <span className="text-2xl mr-6 ml-5">{episode.episode_number}</span>
                            <div className="h-full w-full flex">
                                <img className="object-contain h-full" src={episode.still_path ? `https://image.tmdb.org/t/p/original${episode.still_path}` : `https://us.123rf.com/450wm/tkacchuk/tkacchuk2004/tkacchuk200400017/143745488-no-hay-icono-de-imagen-vector-de-l%C3%ADnea-editable-no-hay-imagen-no-hay-foto-disponible-o-no-hay.jpg`} alt={episode.name} />
                                <div className="flex flex-col p-3 w-full">
                                    <h3 className="font-semibold">{episode.name.substring(0, 50)}</h3>
                                    {episode.runtime === null ? <p className="text-4xl opacity-100">{`PROXIMAMENTE ${episode.air_date}`}</p>
                                    : <p>{episode.overview.substring(0, 180)}...</p>}
                                </div>
                                <span className="w-20">{episode.runtime ? episode.runtime + ' min' : ''}</span>
                            </div>
                        </div>
                        </div>
                    ))}
                    <hr />
                </div>
            </div>
        </section> : ''}
        </>
    )

}