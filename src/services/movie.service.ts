import {AxiosResponse} from "axios";

import {axiosMovieService} from "./axiosMovie.service";
import {movieEndpoints} from "../constants/movie.urls";
import {IMovieData} from "../interfaces/movieData.interface";

class MovieService {

    async getMoviesList(page: string): Promise<AxiosResponse<IMovieData>> {
        return axiosMovieService.get(`${movieEndpoints.movies}?page=${page}`);
    }
}

export const movieService = new MovieService();
