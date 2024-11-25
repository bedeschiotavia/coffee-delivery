import { ShoppingCart } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import { QuantityInput } from '../Form/QuantityInput'
import {
  CoffeeImg,
  Container,
  Description,
  Order,
  Price,
  Tags,
  Title,
  Wrapper,
} from './style'

export function Card() {
  const theme = useTheme()

  return (
    <Container>
      <CoffeeImg src='../../../public/images/coffees/americano.png' alt='americano'/>
        <Tags>
          <span>regular</span>
          <span>with milk</span>
        </Tags>
        <Title>Americano</Title>
        <Description>Diluted espresso, less intense than traditional espresso</Description>
        <Wrapper>
          <Price>
            <span>€</span>
            <span>3,00</span>
          </Price>

          <Order>
            <QuantityInput/>
            <button>
              <ShoppingCart size={22} color={theme.colors['base-card']} />
            </button>
          </Order>
        </Wrapper>
    </Container>
  )
}