
import Error404 from "components/Error";

import Favoritos from "pages/Favoritos";
import PaginaBase from "pages/PaginaBase";
import Player from "pages/Player";

const { default: Inicio } = require("pages/inicio")
const { BrowserRouter, Routes, Route } = require("react-router-dom")

const AppRoutes = () => {
    return (
        <BrowserRouter>


            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />}></Route>
                    <Route path="favoritos" element={<Favoritos />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<Error404 />}></Route>
                </Route>
            </Routes>

        </BrowserRouter>
    )
}

export default AppRoutes;