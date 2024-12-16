import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useParams } from 'react-router-dom'
import { useTheme } from 'styled-components'

import { useCart } from '../../hooks/useCart'
import { Container, Heading, Info, InfoContent, Order } from './styles'

export function Success() {
  const { orders } = useCart()
  const { orderId } = useParams()
  const orderInfo = orders.find((order) => order.id === Number(orderId))
  const paymentMethod = {
    credit: 'Credit card',
    debit: 'Debit card',
    cash: 'Cash',
  }
  const theme = useTheme()

  if (!orderInfo?.id) {
    return null
  }
  
  return(
    <Container>
      <Order>
        <Heading>
          <h2>Woohoo! Order Confirmed!</h2>
          <span>Sit back, relax, and your coffee will be with you soon!</span>
        </Heading>

        <Info>
          <InfoContent>
            <div>
              <MapPin
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors.purple }}
                size={32}
              />

              <div>
                <span>
                  Delivery on{' '}
                  <strong>
                  {orderInfo.street}, {orderInfo.number}
                  </strong>
                </span>

                <span>
                  {orderInfo.city},{orderInfo.state}
                </span>
              </div>
            </div>

            <div>
              <Timer
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors.yellow }}
                size={32}
              />

              <div>
                <span>Estimated delivery</span>

                <strong>20 min - 30 min</strong>
              </div>
            </div>

            <div>
              <CurrencyDollar
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors['yellow-dark'] }}
                size={32}
              />

              <div>
                <span>Payment on delivery</span>
                <strong>{paymentMethod[orderInfo.paymentMethod]}</strong>

                <strong></strong>
              </div>
            </div>
          </InfoContent>
        </Info>
      </Order>

      <img src="/images/delivery.svg" alt="Pedido concluído" />
    </Container>
  )
}