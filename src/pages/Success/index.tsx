import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react"
import { useTheme } from "styled-components"
import { Container, Heading, Info, InfoContent, Order } from "./styles"

export function Success() {
  const theme = useTheme()
  
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
                    Street
                  </strong>
                </span>

                <span>
                  Coimbra
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
                <span>Pagamento na entrega</span>

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