const { default: Inicio } = require("pages/inicio")
const { BrowserRouter, Routes, Route } = require("react-router-dom")

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;