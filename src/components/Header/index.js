import styles from './Header.module.scss'

export default function Header({titulo, descriçao, className = '', imagem}) {
    return (
       <header className={`${styles.header} ${className}`}>
        <div className={styles['header-texto']}>
            <h1>
                {titulo}
            </h1>
            <h2>
                {descriçao}
            </h2>
        </div>
        <div className={styles['header-imagem']}>
            <img 
            alt={titulo}
            src={imagem}
            />
        </div>
       </header>
    )
}