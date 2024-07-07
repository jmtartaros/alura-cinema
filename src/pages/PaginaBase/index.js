import Cabecera from "components/Cabecera"
import Container from "components/Container"
import Pie from "components/Pie"
import FavoritosProvider from "Context"
import { Outlet } from "react-router-dom"

const PaginaBase = () => {
    return (<main>
        <Cabecera />
        <FavoritosProvider>
            <Container>
                <Outlet />
            </Container>
        </FavoritosProvider>
        <Pie />
    </main>)
}
export default PaginaBase