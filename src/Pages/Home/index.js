import Header from 'components/Header'
import styles from './Home.module.scss'
import relogio from 'assets/inicial.png'

export default function Home() {
    return (
        <div>
            <Header
                titulo={ 'Classificados Tech'}
                descriçao={'Compre diversos tipos de produtos no melhor site do brasil'}
                imagem={relogio}
                className={styles.header}
            />
        </div>)
}