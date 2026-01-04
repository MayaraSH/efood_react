import { useState } from 'react'
import {
  CheckoutContainer,
  CheckoutOverlay,
  CheckoutTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  SubmitButton,
  BackButton
} from './styles'

interface CheckoutProps {
  isOpen: boolean
  step: 'delivery' | 'payment' | 'confirmation'
  onBack: () => void
  onSubmitDelivery: (data: DeliveryData) => void
  onSubmitPayment: (data: PaymentData) => void
  onFinish: () => void
  orderId?: string
}

export interface DeliveryData {
  receiver: string
  address: string
  city: string
  cep: string
  number: string
  complement?: string
}

export interface PaymentData {
  cardName: string
  cardNumber: string
  cvv: string
  expiresMonth: string
  expiresYear: string
}

const Checkout = ({
  isOpen,
  step,
  onBack,
  onSubmitDelivery,
  onSubmitPayment,
  onFinish,
  orderId
}: CheckoutProps) => {
  const [deliveryData, setDeliveryData] = useState<DeliveryData>({
    receiver: '',
    address: '',
    city: '',
    cep: '',
    number: '',
    complement: ''
  })

  const [paymentData, setPaymentData] = useState<PaymentData>({
    cardName: '',
    cardNumber: '',
    cvv: '',
    expiresMonth: '',
    expiresYear: ''
  })

  const handleDeliverySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmitDelivery(deliveryData)
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmitPayment(paymentData)
  }

  return (
    <>
      <CheckoutOverlay isOpen={isOpen} onClick={onBack} />
      <CheckoutContainer isOpen={isOpen}>
        {step === 'delivery' && (
          <>
            <CheckoutTitle>Entrega</CheckoutTitle>
            <Form onSubmit={handleDeliverySubmit}>
              <FormGroup>
                <Label htmlFor="receiver">Quem irá receber</Label>
                <Input
                  id="receiver"
                  type="text"
                  value={deliveryData.receiver}
                  onChange={(e) =>
                    setDeliveryData({
                      ...deliveryData,
                      receiver: e.target.value
                    })
                  }
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="address">Endereço</Label>
                <Input
                  id="address"
                  type="text"
                  value={deliveryData.address}
                  onChange={(e) =>
                    setDeliveryData({
                      ...deliveryData,
                      address: e.target.value
                    })
                  }
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="city">Cidade</Label>
                <Input
                  id="city"
                  type="text"
                  value={deliveryData.city}
                  onChange={(e) =>
                    setDeliveryData({ ...deliveryData, city: e.target.value })
                  }
                  required
                />
              </FormGroup>
              <Row>
                <FormGroup>
                  <Label htmlFor="cep">CEP</Label>
                  <Input
                    id="cep"
                    type="text"
                    value={deliveryData.cep}
                    onChange={(e) =>
                      setDeliveryData({ ...deliveryData, cep: e.target.value })
                    }
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="number">Número</Label>
                  <Input
                    id="number"
                    type="text"
                    value={deliveryData.number}
                    onChange={(e) =>
                      setDeliveryData({
                        ...deliveryData,
                        number: e.target.value
                      })
                    }
                    required
                  />
                </FormGroup>
              </Row>
              <FormGroup>
                <Label htmlFor="complement">Complemento (opcional)</Label>
                <Input
                  id="complement"
                  type="text"
                  value={deliveryData.complement}
                  onChange={(e) =>
                    setDeliveryData({
                      ...deliveryData,
                      complement: e.target.value
                    })
                  }
                />
              </FormGroup>
              <SubmitButton type="submit">
                Continuar com o pagamento
              </SubmitButton>
              <BackButton type="button" onClick={onBack}>
                Voltar para o carrinho
              </BackButton>
            </Form>
          </>
        )}

        {step === 'payment' && (
          <>
            <CheckoutTitle>Pagamento - Valor a pagar R$ 190,90</CheckoutTitle>
            <Form onSubmit={handlePaymentSubmit}>
              <FormGroup>
                <Label htmlFor="cardName">Nome no cartão</Label>
                <Input
                  id="cardName"
                  type="text"
                  value={paymentData.cardName}
                  onChange={(e) =>
                    setPaymentData({ ...paymentData, cardName: e.target.value })
                  }
                  required
                />
              </FormGroup>
              <Row>
                <FormGroup>
                  <Label htmlFor="cardNumber">Número do cartão</Label>
                  <Input
                    id="cardNumber"
                    type="text"
                    value={paymentData.cardNumber}
                    onChange={(e) =>
                      setPaymentData({
                        ...paymentData,
                        cardNumber: e.target.value
                      })
                    }
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    type="text"
                    maxLength={3}
                    value={paymentData.cvv}
                    onChange={(e) =>
                      setPaymentData({ ...paymentData, cvv: e.target.value })
                    }
                    required
                  />
                </FormGroup>
              </Row>
              <Row>
                <FormGroup>
                  <Label htmlFor="expiresMonth">Mês de vencimento</Label>
                  <Input
                    id="expiresMonth"
                    type="text"
                    maxLength={2}
                    placeholder="MM"
                    value={paymentData.expiresMonth}
                    onChange={(e) =>
                      setPaymentData({
                        ...paymentData,
                        expiresMonth: e.target.value
                      })
                    }
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="expiresYear">Ano de vencimento</Label>
                  <Input
                    id="expiresYear"
                    type="text"
                    maxLength={4}
                    placeholder="AAAA"
                    value={paymentData.expiresYear}
                    onChange={(e) =>
                      setPaymentData({
                        ...paymentData,
                        expiresYear: e.target.value
                      })
                    }
                    required
                  />
                </FormGroup>
              </Row>
              <SubmitButton type="submit">Finalizar pagamento</SubmitButton>
              <BackButton type="button" onClick={onBack}>
                Voltar para a edição de endereço
              </BackButton>
            </Form>
          </>
        )}

        {step === 'confirmation' && (
          <>
            <CheckoutTitle>Pedido realizado - {orderId}</CheckoutTitle>
            <p
              style={{
                color: '#FFEBD9',
                fontSize: '14px',
                lineHeight: '22px',
                marginBottom: '24px'
              }}
            >
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
              <br />
              <br />
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
              <br />
              <br />
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
              <br />
              <br />
              Esperamos que defrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <SubmitButton type="button" onClick={onFinish}>
              Concluir
            </SubmitButton>
          </>
        )}
      </CheckoutContainer>
    </>
  )
}

export default Checkout
