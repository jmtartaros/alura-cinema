import { useFavoritoContext } from "Context"
import styles from "./Card.module.css"
import iconFavorito from "./iconFavorito.png"
import iconNoFavorito from "./iconNoFavorito.png"
import { Link } from "react-router-dom"

const Card = ({ id, capa, titulo }) => {
    const { favorito, addFav } = useFavoritoContext()
    const isFavorito = favorito.some(fav => fav.id === id)
    const icon = isFavorito ? iconFavorito : iconNoFavorito
    return (<div className={styles.container}>
        <Link className={styles.link} to={`${id}`}>
            <img src={capa} className={styles.capa} alt={titulo} />
            <h2>{titulo}</h2>
        </Link>
        <img src={icon} alt="Icon Favorito"
            onClick={() => addFav({ id, titulo, capa })}
        />

    </div>)
}

export default Card