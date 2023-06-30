import {AxiosResponse} from "axios";

import {axiosMovieService} from "./axiosMovie.service";
import {movieEndpoints} from "../constants/movie.urls";
import {IMovieData} from "../interfaces/movieData.interface";

class MovieService {

    async getMoviesList(page: string): Promise<AxiosResponse<IMovieData>> {
        return axiosMovieService.get(`${movieEndpoints.movies}`,{params:{page, language: 'en-Us'}});
    }

    async getMovieInfo(id:number):Promise<AxiosResponse>{
        return axiosMovieService.get(`${movieEndpoints.movieInfo}/${id}`);
    }

    async getVideoTrailer(id: number): Promise<AxiosResponse> {
        return axiosMovieService.get(`${movieEndpoints.movieInfo}/${id}/videos`);
    }

}

export const movieService = new MovieService();
