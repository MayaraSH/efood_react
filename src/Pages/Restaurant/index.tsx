import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { add, open, close, clear } from '../../store/reducers/cart'
import Cart from '../../Components/Cart'

import { Container, ProductsContainer, ProductGrid, Loading } from './styles'
import { getRestaurantById } from '../../services/api'
import { Restaurant as RestaurantType, MenuItem } from '../../types'
import Checkout, { DeliveryData, PaymentData } from '../../Components/Checkout'
import RestaurantHeader from '../../Components/RestaurantHeader'
import ProductCard from '../../Components/ProductCard'
import Footer from '../../Components/Footer'
import ProductModal from '../../Components/ProductModal'

const Restaurant = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const [restaurant, setRestaurant] = useState<RestaurantType | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null)
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
    const newItem = {
      id: Date.now(),
      name: product.nome,
      price: product.preco,
      image: product.foto
    }
    dispatch(add(newItem))
    setSelectedProduct(null)
    dispatch(open())
  }

  const handleContinueToDelivery = () => {
    dispatch(close())
    setIsCheckoutOpen(true)
    setCheckoutStep('delivery')
  }

  const handleBackToCart = () => {
    setIsCheckoutOpen(false)
    dispatch(open())
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
    dispatch(clear())
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
        cartCount={items.length}
        onCartClick={() => dispatch(open())}
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

      <Cart onContinue={handleContinueToDelivery} />

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
