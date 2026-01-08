import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Container, ProductsContainer, ProductGrid, Loading } from './styles'
import { getRestaurantById } from '../../services/api'
import { Restaurant as RestaurantType, MenuItem } from '../../types'
import Cart, { CartItemType } from '../../Components/Cart'
import Checkout, { DeliveryData, PaymentData } from '../../Components/Checkout'
import RestaurantHeader from '../../Components/RestaurantHeader'
import ProductCard from '../../Components/ProductCard'
import Footer from '../../Components/Footer'
import ProductModal from '../../Components/ProductModal'

const Restaurant = () => {
  const { id } = useParams<{ id: string }>()
  const [restaurant, setRestaurant] = useState<RestaurantType | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null)
  const [cartItems, setCartItems] = useState<CartItemType[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [checkoutStep, setCheckoutStep] = useState<
    'delivery' | 'payment' | 'confirmation'
  >('delivery')
  const [orderId, setOrderId] = useState<string>('')

  useEffect(() => {
    const fetchRestaurant = async () => {
      if (!id) return

      try {
        setLoading(true)
        const data = await getRestaurantById(id)
        setRestaurant(data)
      } catch (err) {
        console.error('Erro ao carregar restaurante:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchRestaurant()
  }, [id])

  const handleProductClick = (product: MenuItem) => {
    setSelectedProduct(product)
  }

  const handleCloseModal = () => {
    setSelectedProduct(null)
  }

  const handleAddToCart = (product: MenuItem) => {
    const newItem: CartItemType = {
      id: Date.now(),
      name: product.nome,
      price: product.preco,
      image: product.foto
    }
    setCartItems([...cartItems, newItem])
    setSelectedProduct(null)
    setIsCartOpen(true)
  }

  const handleRemoveFromCart = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const handleContinueToDelivery = () => {
    setIsCartOpen(false)
    setIsCheckoutOpen(true)
    setCheckoutStep('delivery')
  }

  const handleBackToCart = () => {
    setIsCheckoutOpen(false)
    setIsCartOpen(true)
    setCheckoutStep('delivery')
  }

  const handleBackToDelivery = () => {
    setCheckoutStep('delivery')
  }

  const handleSubmitDelivery = (data: DeliveryData) => {
    console.log('Delivery data:', data)
    setCheckoutStep('payment')
  }

  const handleSubmitPayment = (data: PaymentData) => {
    console.log('Payment data:', data)
    const newOrderId = `ORDER_${Math.random()
      .toString(36)
      .substr(2, 9)
      .toUpperCase()}`
    setOrderId(newOrderId)
    setCheckoutStep('confirmation')
  }

  const handleFinishOrder = () => {
    setIsCheckoutOpen(false)
    setCartItems([])
    setCheckoutStep('delivery')
    setOrderId('')
  }

  if (loading) {
    return (
      <Container>
        <Loading>Carregando restaurante...</Loading>
      </Container>
    )
  }

  if (!restaurant) {
    return (
      <Container>
        <Loading>Restaurante não encontrado</Loading>
      </Container>
    )
  }

  return (
    <Container>
      <RestaurantHeader
        category={restaurant.tipo}
        name={restaurant.titulo}
        heroImage={restaurant.capa}
        cartCount={cartItems.length}
        onCartClick={() => setIsCartOpen(true)}
      />
      <ProductsContainer>
        <ProductGrid>
          {restaurant.cardapio.map((product) => (
            <ProductCard
              key={product.id}
              name={product.nome}
              description={product.descricao}
              image={product.foto}
              onAddToCart={() => handleProductClick(product)}
            />
          ))}
        </ProductGrid>
      </ProductsContainer>
      <Footer />

      {selectedProduct && (
        <ProductModal
          name={selectedProduct.nome}
          description={selectedProduct.descricao}
          image={selectedProduct.foto}
          serves={selectedProduct.porcao}
          price={selectedProduct.preco}
          onClose={handleCloseModal}
          onAddToCart={() => handleAddToCart(selectedProduct)}
        />
      )}

      <Cart
        isOpen={isCartOpen}
        items={cartItems}
        onClose={() => setIsCartOpen(false)}
        onRemoveItem={handleRemoveFromCart}
        onContinue={handleContinueToDelivery}
      />

      <Checkout
        isOpen={isCheckoutOpen}
        step={checkoutStep}
        onBack={
          checkoutStep === 'delivery' ? handleBackToCart : handleBackToDelivery
        }
        onSubmitDelivery={handleSubmitDelivery}
        onSubmitPayment={handleSubmitPayment}
        onFinish={handleFinishOrder}
        orderId={orderId}
      />
    </Container>
  )
}

export default Restaurant
