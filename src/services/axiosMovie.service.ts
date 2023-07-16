import axios from "axios";

import {baseMovieURL} from "../constants";

export const axiosMovieService = axios.create({baseURL: baseMovieURL});

axiosMovieService.interceptors.request.use(req => {
    req.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWQzOTk0YmNhYmNmOWI0MjJjMjZhZjRiODI4NWFmZCIsInN1YiI6IjYzZWYzMGU1MGYwZGE1MDA3YmUxNjVjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-_fxSmlMmdXvnfe3iMvAN8RXLWJcEBoNpXKDsQejigc';

    return req;
});
