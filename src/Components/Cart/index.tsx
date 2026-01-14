import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import {
  CartOverlay,
  CartContainer,
  CartItem,
  CartItemImage,
  CartItemInfo,
  CartItemName,
  CartItemPrice,
  RemoveButton,
  CartTotal,
  CartButton,
  CloseButton
} from './styles'

interface CartProps {
  onContinue: () => void
}

const Cart = ({ onContinue }: CartProps) => {
  const dispatch = useDispatch()
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)

  const total = items.reduce((sum, item) => sum + item.price, 0)

  const handleClose = () => {
    dispatch(close())
  }

  const handleRemove = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <>
      <CartOverlay isOpen={isOpen} onClick={handleClose} />
      <CartContainer isOpen={isOpen}>
        <CloseButton onClick={handleClose}>✕</CloseButton>

        {items.length === 0 ? (
          <p style={{ color: '#FFEBD9', textAlign: 'center', padding: '20px' }}>
            O carrinho está vazio, adicione pelo menos um produto para continuar
            com a compra.
          </p>
        ) : (
          <>
            {items.map((item) => (
              <CartItem key={item.id}>
                <CartItemImage>
                  <img src={item.image} alt={item.name} />
                </CartItemImage>
                <CartItemInfo>
                  <CartItemName>{item.name}</CartItemName>
                  <CartItemPrice>R$ {item.price.toFixed(2)}</CartItemPrice>
                </CartItemInfo>
                <RemoveButton onClick={() => handleRemove(item.id)}>
                  <img src="/images/lixeira.png" alt="Remover item" />
                </RemoveButton>
              </CartItem>
            ))}
            <CartTotal>
              <span>Valor total</span>
              <span>R$ {total.toFixed(2)}</span>
            </CartTotal>
            <CartButton onClick={onContinue}>
              Continuar com a entrega
            </CartButton>
          </>
        )}
      </CartContainer>
    </>
  )
}

export default Cart
