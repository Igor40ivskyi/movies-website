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

const App = () => {

    return (
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
                    </Route>
                </Route>

                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;

