import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext()

FavoritosContext.displayName = "Favoritos"

const FavoritosProvider = ({ children }) => {
    const [favorito, setFavorito] = useState([])
    return <FavoritosContext.Provider value={{ favorito, setFavorito }}>
        {children}
    </FavoritosContext.Provider>
}

export const useFavoritoContext = () => {
    const { favorito, setFavorito } = useContext(FavoritosContext);

    const addFav = (newFav) => {
        const favoritoRepetido = favorito.some((item) => item.id === newFav.id)

        let newList = [...favorito]
        if (!favoritoRepetido) {
            newList.push(newFav)
            return setFavorito(newList)
        }

        newList = favorito.filter(item => item.id !== newFav.id)
        return setFavorito(newList)
    };
    return { favorito, addFav }
}

export default FavoritosProvider