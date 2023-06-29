import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {LoginPage, RegisterPage} from "./pages";
import {MoviesPage} from "./pages";
import {NotFoundPage} from "./pages";

const App = () => {

    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'register'}/>}/>
                <Route path={'register'} element={<RegisterPage/>}/>
                <Route path={'login'} element={<LoginPage/>}/>
                <Route path={'movies'} element={<MoviesPage/>}>
                </Route>
                    <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;

