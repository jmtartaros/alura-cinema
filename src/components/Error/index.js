import styles from "./Error.module.css"

const Error404 = () => {
    return (<section className={styles.container}>
        <h2 className={styles.error}>404</h2>
        <p className={styles.texto}>Página no encontrada</p>
    </section>)
}
export default Error404