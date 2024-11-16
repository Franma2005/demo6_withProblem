import { MoviesResponse, Result } from "../../config/Responses/dataMovies";
import { DataMovieRequest } from "../FilmAdapter";
import { HttpError } from "./HttpError";

interface Config {
    url_base : string;
    key: string;
}

export interface IFilms {
    getFilms(route : string, pageInfo : DataMovieRequest | null) : Promise<MoviesResponse | HttpError>;
}

export abstract class Http implements IFilms {
    protected url_base: string;
    protected key: string;

    constructor({ url_base, key} : Config) {
        this.url_base = url_base;
        this.key = key;
    }

    //* Hay que modificar IFilms que es la interfaz que obliga a Http a implentar el método
    abstract getFilms(route: string, pageInfo: DataMovieRequest | null) : Promise<MoviesResponse | HttpError> ;
}