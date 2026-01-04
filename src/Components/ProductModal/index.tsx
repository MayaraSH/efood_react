import {
  Overlay,
  ModalContainer,
  CloseButton,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductDescription,
  ProductServes,
  AddButton
} from './styles'

interface ProductModalProps {
  name: string
  description: string
  image: string
  serves?: string
  price: number
  onClose: () => void
  onAddToCart: () => void
}

const ProductModal = ({
  name,
  description,
  image,
  serves,
  price,
  onClose,
  onAddToCart
}: ProductModalProps) => {
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer>
        <CloseButton onClick={onClose}>✕</CloseButton>
        <ProductImage>
          <img src={image} alt={name} />
        </ProductImage>
        <ProductInfo>
          <ProductTitle>{name}</ProductTitle>
          <ProductDescription>{description}</ProductDescription>
          {serves && <ProductServes>{serves}</ProductServes>}
          <AddButton onClick={onAddToCart}>
            Adicionar ao carrinho - R$ {price.toFixed(2)}
          </AddButton>
        </ProductInfo>
      </ModalContainer>
    </Overlay>
  )
}

export default ProductModal
