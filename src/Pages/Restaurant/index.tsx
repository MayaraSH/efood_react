import { useState } from 'react'

import { Container, ProductsContainer, ProductGrid } from './styles'
import Cart, { CartItemType } from '../../Components/Cart'
import Checkout, { DeliveryData, PaymentData } from '../../Components/Checkout'
import RestaurantHeader from '../../Components/RestaurantHeader'
import ProductCard from '../../Components/ProductCard'
import Footer from '../../Components/Footer'
import ProductModal from '../../Components/ProductModal'

interface Product {
  id: number
  name: string
  description: string
  fullDescription: string // ⬅️ Descrição completa para o modal
  image: string
  price: number
  serves?: string
}

const products: Product[] = [
  {
    id: 1,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    fullDescription:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
    image: '/images/pizza.png',
    price: 60.9,
    serves: 'Serve de 2 a 3 pessoas'
  },
  {
    id: 2,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    fullDescription:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
    image: '/images/pizza.png',
    price: 60.9,
    serves: 'Serve de 2 a 3 pessoas'
  },
  {
    id: 3,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    fullDescription:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
    image: '/images/pizza.png',
    price: 60.9,
    serves: 'Serve de 2 a 3 pessoas'
  },
  {
    id: 4,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    fullDescription:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
    image: '/images/pizza.png',
    price: 60.9,
    serves: 'Serve de 2 a 3 pessoas'
  },
  {
    id: 5,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    fullDescription:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
    image: '/images/pizza.png',
    price: 60.9,
    serves: 'Serve de 2 a 3 pessoas'
  },
  {
    id: 6,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    fullDescription:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
    image: '/images/pizza.png',
    price: 60.9,
    serves: 'Serve de 2 a 3 pessoas'
  }
]

const Restaurant = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [cartItems, setCartItems] = useState<CartItemType[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [checkoutStep, setCheckoutStep] = useState<
    'delivery' | 'payment' | 'confirmation'
  >('delivery')
  const [orderId, setOrderId] = useState<string>('')

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
  }

  const handleCloseModal = () => {
    setSelectedProduct(null)
  }

  const handleAddToCart = (product: Product) => {
    const newItem: CartItemType = {
      id: Date.now(), // ID único baseado no timestamp
      name: product.name,
      price: product.price,
      image: product.image
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
    // Simular geração de ID do pedido
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

  return (
    <Container>
      <RestaurantHeader
        category="Italiana"
        name="La Dolce Vita Trattoria"
        heroImage="/images/restaurant2.png"
        cartCount={cartItems.length}
        onCartClick={() => setIsCartOpen(true)}
      />
      <ProductsContainer>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={() => handleProductClick(product)}
            />
          ))}
        </ProductGrid>
      </ProductsContainer>
      <Footer />

      {selectedProduct && (
        <ProductModal
          name={selectedProduct.name}
          description={selectedProduct.fullDescription} // ⬅️ Usa descrição completa
          image={selectedProduct.image}
          serves={selectedProduct.serves}
          price={selectedProduct.price}
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
