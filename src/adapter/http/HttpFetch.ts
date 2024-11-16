import { MoviesResponse, Result } from "../../config/Responses/dataMovies";
import { DataMovieRequest } from "../FilmAdapter";
import { Http } from "./Http";
import { HttpError } from "./HttpError";

export class HttpFetch extends Http {
    async getFilms(route : string, pageInfo: DataMovieRequest | null): Promise<MoviesResponse | HttpError> {
        try { 
            console.log(pageInfo);
            if(pageInfo != null && (pageInfo.page > pageInfo.total || pageInfo.page < 0)) pageInfo.page = 1;
            const data = await fetch(`${this.url_base}${route}?api_key=${this.key}&page=${pageInfo?.page ?? 1}`);
            const jsonData: MoviesResponse = await data.json();
            return jsonData;
        } catch(error) {
            return new HttpError(`${error}`);
        }
    }
}