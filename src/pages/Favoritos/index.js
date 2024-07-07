import Banner from "components/Banner"
import styles from "./Favoritos.module.css"
import Titulo from "components/Titulo"
import { useFavoritoContext } from "Context"
import Card from "components/Card"

const Favoritos = () => {
    const { favorito } = useFavoritoContext()
    return (<>
        <Banner img="favoritos" color="#000555" />
        <Titulo><h1>Favoritos</h1></Titulo>
        <section className={styles.container}>
            {
                favorito.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })
            }
        </section>
    </>)
}
export default Favoritos