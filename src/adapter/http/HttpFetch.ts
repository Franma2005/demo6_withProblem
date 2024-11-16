import { MoviesResponse, Result } from "../../config/Responses/dataMovies";
import { DataMovieRequest } from "../FilmAdapter";
import { Http } from "./Http";
import { HttpError } from "./HttpError";

export class HttpFetch extends Http {
    async getFilms(route : string, pageInfo: DataMovieRequest | null): Promise<MoviesResponse | HttpError> {
        try {
            //* Controlamos pageInfo en axios
            //* Primero si no es nulo y se pone un número de páginas que no se debería se deja un valor por defecto
            if(pageInfo != null && (pageInfo.page > pageInfo.total || pageInfo.page < 0)) pageInfo.page = 1;
            //* Explicacion: pageInfo?.page: En el caso de que sea de tipo DataMovieRequest se accede al page. En el caso de que sea null pageInfo.
            //* lo detecta antes de acceder al page y devuelve undefined. Entonces el operador ?? detecta que es undefined y envia lo de despues de 
            //* la interrogación
            const data = await fetch(`${this.url_base}${route}?api_key=${this.key}&page=${pageInfo?.page ?? 1}`);
            const jsonData: MoviesResponse = await data.json();
            return jsonData;
        } catch(error) {
            return new HttpError(`${error}`);
        }
    }
}