const baseMovieURL = 'https://api.themoviedb.org/3';

const movieEndpoints = {
    movies: '/discover/movie',
    movieInfo: '/movie',
    genresList:'/genre/movie/list',
    popularMoviesList:'/movie/popular',
    now_playingMoviesList: '/movie/now_playing',
    top_ratedMoviesList: '/movie/top_rated',
    upcomingMoviesList: '/movie/upcoming',
    byKeyword: '/search/movie',
    recommendations: (id: number): string => `/movie/${id}/recommendations`,
};

export {
    baseMovieURL,
    movieEndpoints,
};
