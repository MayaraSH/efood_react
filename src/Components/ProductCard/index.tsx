import { ProductImage, Card, ProductName, Description, Button } from './styles'

interface ProductCardProps {
  name: string
  description: string
  image: string
  onAddToCart: () => void
}

const ProductCard = ({
  name,
  description,
  image,
  onAddToCart
}: ProductCardProps) => {
  return (
    <Card>
      <ProductImage>
        <img src={image} alt={name} />
      </ProductImage>
      <ProductName>{name}</ProductName>
      <Description>{description}</Description>
      <Button onClick={onAddToCart}>Mais detalhes</Button>
    </Card>
  )
}

export default ProductCard
