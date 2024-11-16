import axios from "axios";
import { MoviesResponse, Result } from "../../config/Responses/dataMovies";
import { Http } from "./Http";
import { HttpError } from "./HttpError";
import { DataMovieRequest } from "../FilmAdapter";


export class HttpAxios extends Http {
    async getFilms(route: string, pageInfo: DataMovieRequest | null): Promise<MoviesResponse | HttpError> {
        try {
            //* Controlamos pageInfo en axios
            //* Primero si no es nulo y se pone un número de páginas que no se debería se deja un valor por defecto
            if(pageInfo != null && (pageInfo.page > pageInfo.total || pageInfo.page < 0)) pageInfo.page = 1;
            //* Explicacion: pageInfo?.page: En el caso de que sea de tipo DataMovieRequest se accede al page. En el caso de que sea null pageInfo.
            //* lo detecta antes de acceder al page y devuelve undefined. Entonces el operador ?? detecta que es undefined y envia lo de despues de 
            //* la interrogación
            const {data} = await axios.get<MoviesResponse>(`${this.url_base}${route}?api_key=${this.key}&page=${pageInfo?.page ?? 1}`);
            return data;
        } catch(error) {
            return new HttpError(`${error}`);
        }
    }
}