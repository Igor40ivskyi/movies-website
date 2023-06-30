import {IMovie} from "./movie.interface";

export interface IMovieInfo extends IMovie {
    budget: number;
    genres: { id: number, name: string }[];
    production_countries: {
        iso_3166_1: string,
        name: string
    }[];
    runtime: number;
    status: string;
}

