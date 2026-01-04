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
  CartButton
} from './styles'

export interface CartItemType {
  id: number
  name: string
  price: number
  image: string
}

interface CartProps {
  isOpen: boolean
  items: CartItemType[]
  onClose: () => void
  onRemoveItem: (id: number) => void
  onContinue: () => void
}

const Cart = ({
  isOpen,
  items,
  onClose,
  onRemoveItem,
  onContinue
}: CartProps) => {
  const total = items.reduce((sum, item) => sum + item.price, 0)

  return (
    <>
      <CartOverlay isOpen={isOpen} onClick={onClose} />
      <CartContainer isOpen={isOpen}>
        {items.map((item) => (
          <CartItem key={item.id}>
            <CartItemImage>
              <img src={item.image} alt={item.name} />
            </CartItemImage>
            <CartItemInfo>
              <CartItemName>{item.name}</CartItemName>
              <CartItemPrice>R$ {item.price.toFixed(2)}</CartItemPrice>
            </CartItemInfo>
            <RemoveButton onClick={() => onRemoveItem(item.id)}>
              <img src="/images/lixeira.png" alt="Remover item" />
            </RemoveButton>
          </CartItem>
        ))}
        <CartTotal>
          <span>Valor total</span>
          <span>R$ {total.toFixed(2)}</span>
        </CartTotal>
        <CartButton onClick={onContinue}>Continuar com a entrega</CartButton>
      </CartContainer>
    </>
  )
}

export default Cart
