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

    async getGenresList():Promise<AxiosResponse> {
        return axiosMovieService.get(movieEndpoints.genresList, {params: {language: 'en'}});
    }

    async getMoviesByGenreId(id: string,page:string): Promise<AxiosResponse> {
        return axiosMovieService.get(movieEndpoints.movies, {params: {with_genres: id,page, language: 'en-US'}});
    }

    getSortedMoviesList(sortParams: any): Promise<AxiosResponse> {
        return axiosMovieService.get(movieEndpoints.movies, {params: {primary_release_year: 1980,sort_by:null}})
    }

}

export const movieService = new MovieService();
