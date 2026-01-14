import { InputHTMLAttributes, useState } from 'react'
import { useSelector } from 'react-redux'
import InputMask from 'react-input-mask'
import { RootReducer } from '../../store'
import { checkout, CheckoutPayload } from '../../services/api'
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
  BackButton,
  ErrorText
} from './styles'

interface CheckoutProps {
  isOpen: boolean
  step: 'delivery' | 'payment' | 'confirmation'
  onBack: () => void
  onSubmitDelivery: (data: DeliveryData) => void
  onSubmitPayment: (data: PaymentData & { orderId?: string }) => void
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
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [attemptedSubmit, setAttemptedSubmit] = useState(false)

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

  const total = items.reduce((sum, item) => sum + item.price, 0)

  // Validações
  const isDeliveryValid = () => {
    return (
      deliveryData.receiver.trim() !== '' &&
      deliveryData.address.trim() !== '' &&
      deliveryData.city.trim() !== '' &&
      deliveryData.cep.replace(/\D/g, '').length === 8 &&
      deliveryData.number.trim() !== ''
    )
  }

  const isPaymentValid = () => {
    return (
      paymentData.cardName.trim() !== '' &&
      paymentData.cardNumber.replace(/\D/g, '').length === 16 &&
      paymentData.cvv.replace(/\D/g, '').length === 3 &&
      paymentData.expiresMonth.replace(/\D/g, '').length === 2 &&
      paymentData.expiresYear.replace(/\D/g, '').length === 4
    )
  }

  const handleDeliverySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setAttemptedSubmit(true)

    if (!isDeliveryValid()) {
      return
    }

    onSubmitDelivery(deliveryData)
    setAttemptedSubmit(false)
  }

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setAttemptedSubmit(true)

    if (!isPaymentValid()) {
      return
    }

    setLoading(true)
    setError(null)

    try {
      // Montar payload da API
      const payload: CheckoutPayload = {
        products: items.map((item) => ({
          id: item.id,
          price: item.price
        })),
        delivery: {
          receiver: deliveryData.receiver,
          address: {
            description: deliveryData.address,
            city: deliveryData.city,
            zipCode: deliveryData.cep.replace(/\D/g, ''),
            number: Number(deliveryData.number),
            complement: deliveryData.complement
          }
        },
        payment: {
          card: {
            name: paymentData.cardName,
            number: paymentData.cardNumber.replace(/\D/g, ''),
            code: Number(paymentData.cvv),
            expires: {
              month: Number(paymentData.expiresMonth),
              year: Number(paymentData.expiresYear)
            }
          }
        }
      }

      const response = await checkout(payload)
      onSubmitPayment({ ...paymentData, orderId: response.orderId })
      setAttemptedSubmit(false)
    } catch (err) {
      setError('Erro ao processar pagamento. Tente novamente.')
      console.error(err)
    } finally {
      setLoading(false)
    }
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
                  $hasError={
                    attemptedSubmit && deliveryData.receiver.trim() === ''
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
                  $hasError={
                    attemptedSubmit && deliveryData.address.trim() === ''
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
                  $hasError={attemptedSubmit && deliveryData.city.trim() === ''}
                  required
                />
              </FormGroup>

              <Row>
                <FormGroup>
                  <Label htmlFor="cep">CEP</Label>
                  <InputMask
                    mask="99999-999"
                    value={deliveryData.cep}
                    onChange={(e) =>
                      setDeliveryData({ ...deliveryData, cep: e.target.value })
                    }
                  >
                    {(inputProps: InputHTMLAttributes<HTMLInputElement>) => (
                      <Input
                        {...inputProps}
                        id="cep"
                        type="text"
                        placeholder="00000-000"
                        $hasError={
                          attemptedSubmit &&
                          deliveryData.cep.replace(/\D/g, '').length !== 8
                        }
                        required
                      />
                    )}
                  </InputMask>
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
                    $hasError={
                      attemptedSubmit && deliveryData.number.trim() === ''
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
            <CheckoutTitle>
              Pagamento - Valor a pagar R$ {total.toFixed(2)}
            </CheckoutTitle>
            {error && <ErrorText>{error}</ErrorText>}
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
                  $hasError={
                    attemptedSubmit && paymentData.cardName.trim() === ''
                  }
                  required
                  disabled={loading}
                />
              </FormGroup>

              <Row>
                <FormGroup>
                  <Label htmlFor="cardNumber">Número do cartão</Label>
                  <InputMask
                    mask="9999 9999 9999 9999"
                    value={paymentData.cardNumber}
                    onChange={(e) =>
                      setPaymentData({
                        ...paymentData,
                        cardNumber: e.target.value
                      })
                    }
                    disabled={loading}
                  >
                    {(inputProps: InputHTMLAttributes<HTMLInputElement>) => (
                      <Input
                        {...inputProps}
                        id="cardNumber"
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        $hasError={
                          attemptedSubmit &&
                          paymentData.cardNumber.replace(/\D/g, '').length !==
                            16
                        }
                        required
                      />
                    )}
                  </InputMask>
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="cvv">CVV</Label>
                  <InputMask
                    mask="999"
                    value={paymentData.cvv}
                    onChange={(e) =>
                      setPaymentData({ ...paymentData, cvv: e.target.value })
                    }
                    disabled={loading}
                  >
                    {(inputProps: InputHTMLAttributes<HTMLInputElement>) => (
                      <Input
                        {...inputProps}
                        id="cvv"
                        type="text"
                        placeholder="000"
                        $hasError={
                          attemptedSubmit &&
                          paymentData.cvv.replace(/\D/g, '').length !== 3
                        }
                        required
                      />
                    )}
                  </InputMask>
                </FormGroup>
              </Row>

              <Row>
                <FormGroup>
                  <Label htmlFor="expiresMonth">Mês de vencimento</Label>
                  <InputMask
                    mask="99"
                    value={paymentData.expiresMonth}
                    onChange={(e) =>
                      setPaymentData({
                        ...paymentData,
                        expiresMonth: e.target.value
                      })
                    }
                    disabled={loading}
                  >
                    {(inputProps: InputHTMLAttributes<HTMLInputElement>) => (
                      <Input
                        {...inputProps}
                        id="expiresMonth"
                        type="text"
                        placeholder="MM"
                        $hasError={
                          attemptedSubmit &&
                          paymentData.expiresMonth.replace(/\D/g, '').length !==
                            2
                        }
                        required
                      />
                    )}
                  </InputMask>
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="expiresYear">Ano de vencimento</Label>
                  <InputMask
                    mask="9999"
                    value={paymentData.expiresYear}
                    onChange={(e) =>
                      setPaymentData({
                        ...paymentData,
                        expiresYear: e.target.value
                      })
                    }
                    disabled={loading}
                  >
                    {(inputProps: InputHTMLAttributes<HTMLInputElement>) => (
                      <Input
                        {...inputProps}
                        id="expiresYear"
                        type="text"
                        placeholder="AAAA"
                        $hasError={
                          attemptedSubmit &&
                          paymentData.expiresYear.replace(/\D/g, '').length !==
                            4
                        }
                        required
                      />
                    )}
                  </InputMask>
                </FormGroup>
              </Row>

              <SubmitButton type="submit" disabled={loading}>
                {loading ? 'Processando...' : 'Finalizar pagamento'}
              </SubmitButton>
              <BackButton type="button" onClick={onBack} disabled={loading}>
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
