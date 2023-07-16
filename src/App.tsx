import {createContext, useState} from "react";
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {LoginPage, RegisterPage} from "./pages";
import {MoviesPage} from "./pages";
import {NotFoundPage} from "./pages";
import {MoviesList} from "./components";
import {MovieInfo} from "./components";
import {PrivateRoute} from "./utils";
import {MoviesListByGenre} from "./components";
import {FindMovies} from "./components";
import {PopularMoviesList} from "./components";
import {TopRatedMoviesList} from "./components";
import {UpcomingMoviesList} from "./components";
import {NowPlayingMoviesList} from "./components";

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
                            <Route path={'top-rated'} element={<TopRatedMoviesList/>}/>
                            <Route path={'upcoming'} element={<UpcomingMoviesList/>}/>
                            <Route path={'now-playing'} element={<NowPlayingMoviesList/>}/>
                        </Route>
                    </Route>

                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </ThemeContext.Provider>
    );
};

export default App;

