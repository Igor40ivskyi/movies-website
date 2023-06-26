import {axiosMovieService} from "./axiosMovie.service";
import {movieEndpoints} from "../constants/movie.urls";
import {AxiosResponse} from "axios";
import {IMovieData} from "../interfaces/movieData.interface";

class MovieService {

    async getMoviesList(): Promise<AxiosResponse<IMovieData>> {
        return axiosMovieService.get(`${movieEndpoints.movies}?page=5&language=en-US`);
    }
}

export const movieService = new MovieService();
