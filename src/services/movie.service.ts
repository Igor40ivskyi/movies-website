import {AxiosResponse} from "axios";

import {axiosMovieService} from "./axiosMovie.service";
import {movieEndpoints} from "../constants";
import {IMovieData} from "../interfaces";
import {IMoviesSortParams} from "../interfaces";

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

    getSortedMoviesList(sortParams: IMoviesSortParams): Promise<AxiosResponse> {
        return axiosMovieService.get(movieEndpoints.movies, {params: {...sortParams}});
    }

    getPopularMoviesList():Promise<AxiosResponse>{
        return axiosMovieService.get(movieEndpoints.popularMoviesList);
    }

    getTop_ratedMoviesList():Promise<AxiosResponse>{
        return axiosMovieService.get(movieEndpoints.popularMoviesList,{params:{page:3}});
    }

    getUpcomingMoviesList():Promise<AxiosResponse>{
        return axiosMovieService.get(movieEndpoints.upcomingMoviesList);
    }

    getNow_playingMoviesList():Promise<AxiosResponse>{
        return axiosMovieService.get(movieEndpoints.now_playingMoviesList);
    }

    getRecommendationsForMovie(id:number):Promise<AxiosResponse>{
        return axiosMovieService.get(movieEndpoints.recommendations(id));
    }

    getMoviesByKeyWord(keyWord:string):Promise<AxiosResponse>{
        return axiosMovieService.get(movieEndpoints.byKeyword,{params:{query: keyWord}})
    }
}

export const movieService = new MovieService();
