import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {RegisterPage} from "./pages";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'register'}/>}/>
                <Route path={'register'} element={<RegisterPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;

