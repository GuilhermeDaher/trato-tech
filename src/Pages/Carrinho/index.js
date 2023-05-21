import Header from 'components/Header'
import styles from './Carrinho.module.scss'
import { useSelector } from 'react-redux'
import Item from 'components/item'

export default function Carrinho() {
    const carrinho = useSelector(state => {
        const carrinhoReduce = state.carrinho.reduce(( itens, itemNoCarrinho) => {
            const item = state.itens.find( item => item.id === itemNoCarrinho.id);
            itens.push({
                ...item,
                quantidade: itemNoCarrinho.quantidade
            });
            return itens;
        }, [])
        return carrinhoReduce;
    })

    return (
        <div>
            <Header 
            titulo={'Carrinho de Compras'}
            descricao={'Confira os produtos que você adicionou ao carrinho'}
            />
            <div className={styles.Carrinho}>
                {carrinho.map((item) => <Item key={item.id} {...item} carrinho />)}
            </div>
            <div className={styles.total}>
                <strong>
                    Resumo da compra
                </strong>
                <span>
                    subTotal: <strong> R${0.0.toFixed(2)} </strong>
                </span>
            </div>
        </div>
    )
}