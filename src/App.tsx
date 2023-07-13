import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {LoginPage, RegisterPage} from "./pages";
import {MoviesPage} from "./pages";
import {NotFoundPage} from "./pages";
import {MoviesList} from "./components/MoviesList/MoviesList";
import {MovieInfo} from "./components/MovieInfo/MovieInfo";
import {PrivateRoute} from "./utils/router/PrivateRoute";
import {MoviesListByGenre} from "./components/MoviesListByGenre/MoviesListByGenre";
import {FindMovies} from "./components/FindMovies/FindMovies";
import {PopularMoviesList} from "./components/PopularMoviesList/PopularMoviesList";
import {Top_RatedMoviesList} from "./components/Top_RatedMoviesList/Top_RatedMoviesList";
import {UpcomingMoviesList} from "./components/UpcomingMoviesList/UpcomingMoviesList";
import {Now_PlayingMoviesList} from "./components/Now_PlayingMoviesList/Now_PlayingMoviesList";
import {createContext, useState} from "react";

export const ThemeContext = createContext(null);

const App = () => {


    const [theme, setTheme] = useState<string>('light');

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'register'}/>}/>
                    <Route path={'register'} element={<RegisterPage/>}/>
                    <Route path={'login'} element={<LoginPage/>}/>

                    <Route path="movies" element={<PrivateRoute/>}>
                        <Route path={''} element={<MoviesPage/>}>
                            <Route index element={<MoviesList/>}/>
                            <Route path={'info'} element={<MovieInfo/>}/>
                            <Route path={'by-genre'} element={<MoviesListByGenre/>}/>
                            <Route path={'find'} element={<FindMovies/>}/>
                            <Route path={'popular'} element={<PopularMoviesList/>}/>
                            <Route path={'top-rated'} element={<Top_RatedMoviesList/>}/>
                            <Route path={'upcoming'} element={<UpcomingMoviesList/>}/>
                            <Route path={'now-playing'} element={<Now_PlayingMoviesList/>}/>
                        </Route>
                    </Route>

                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </ThemeContext.Provider>
    );
};

export default App;

