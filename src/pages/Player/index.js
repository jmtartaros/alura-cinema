/* eslint-disable react-hooks/exhaustive-deps */
import Banner from "components/Banner"
import styles from "./Player.module.css"
import Titulo from "components/Titulo"
import { useParams } from "react-router-dom"
import Error404 from "components/Error"
import { useEffect, useState } from "react"

const Player = () => {

    const [video, setVideo] = useState([])
    const parametros = useParams()

    useEffect(() => {
        const fecthData = async () => {
            try {
                const getVideo = await fetch(`https://my-json-server.typicode.com/jmtartaros/cinema-api/videos?id=${parametros.id}`)
                const data = await getVideo.json()
                setVideo(...data)
            } catch (error) {
                console.error("No se la verdad", error)
            }
        }
        fecthData()
    }, []);
    // const video = videos.find(video => video.id === Number(parametros.id))

    if (!video) return <Error404 />

    return (<>
        <Banner img="player" color="#58b9ae" />
        <Titulo>
            <h1>Player</h1>
        </Titulo>
        <section className={styles.container}>
            <iframe width="100%" height="100%"
                src={video.link}
                title={video.titulo} frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen></iframe>
        </section>
    </>)
}

export default Player