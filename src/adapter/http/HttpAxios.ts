import axios from "axios";
import { MoviesResponse, Result } from "../../config/Responses/dataMovies";
import { Http } from "./Http";
import { HttpError } from "./HttpError";
import { DataMovieRequest } from "../FilmAdapter";


export class HttpAxios extends Http {
    async getFilms(route: string, pageInfo: DataMovieRequest | null): Promise<MoviesResponse | HttpError> {
        try {
            if(pageInfo != null && (pageInfo.page > pageInfo.total || pageInfo.page < 0)) pageInfo.page = 1;
            const {data} = await axios.get<MoviesResponse>(`${this.url_base}${route}?api_key=${this.key}&page=${pageInfo?.page ?? 1}`);
            return data;
        } catch(error) {
            return new HttpError(`${error}`);
        }
    }
}