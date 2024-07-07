import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import styles from "./index.module.css"
import { useEffect, useState } from "react";

const Inicio = () => {
    const [videos, setVideos] = useState([])
    // fetch("https://my-json-server.typicode.com/jmtartaros/cinema-api/videos")
    //     .then((response) => response.json())
    //     .then((data) => {
    //         setVideos(data)
    //     })

    useEffect(() => {
        const fecthData = async () => {
            try {
                const videoo = await fetch("https://my-json-server.typicode.com/jmtartaros/cinema-api/videos");
                const awaitVideo = await videoo.json()
                setVideos(awaitVideo);
            } catch (error) {
                console.error(`Se cayo la pagina xd`, error)
            }
        }
        fecthData()
    }, [])

    return (
        <>
            <Banner img="home" color="#154580" />
            <Titulo>
                <h1>Un lugar para guardar sus videos favoritos </h1>
            </Titulo>
            {/* <Card id="1" titulo="Perona" capa="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgwOXLHTpp9R5_2npO6rvKwh5IGnH47--YBA&s" /> */}
            <section className={styles.container}>
                {
                    videos.map((video) => {
                        return <Card {...video} key={video.id} />
                    })
                }
            </section>
        </>
    )
}
export default Inicio;