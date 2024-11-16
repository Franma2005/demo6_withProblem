import { useEffect, useState } from "react"
import { Movie } from "../config/entities/Movie";
import { FilmAdapter } from "../adapter/FilmAdapter";
import ResultMovie from "../config/entities/ResultMovie";
import { resultMovieMapper } from "../config/mapper/resultMovieMapper";

export const useMovies = () => {
    //* El estado inicial de nowPlaying podra ser null (la primera vez que se ejecute el useMovie() lo será) y el resto de veces siempre que no halla
    //* ningun problema será nowPlaying
    const [nowPlaying, setNowPlaying] = useState(<ResultMovie | null>(null));
    const [nowPlayingArray, setNowPlayingArray] = useState(<ResultMovie[]>([]));
    const [loading, setLoading] =useState(false);
    const loadMovies = async () => {
        //* Al enviar nowPlaying como null esto causaría problemas en el paramtero de llegada del método getMovies en FilmAdapter
        const movies = await FilmAdapter.getMovies(FilmAdapter.ROUTES.nowPlaying , nowPlaying );
        if (movies != null) {
            setNowPlaying(movies);
            setLoading(true);
        }
    }
    useEffect(() => {
      loadMovies();
    }, [nowPlayingArray])
    
    return {
        nowPlaying, setNowPlaying, loading, nowPlayingArray, setNowPlayingArray
    }
}