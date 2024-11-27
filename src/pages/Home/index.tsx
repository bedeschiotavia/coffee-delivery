import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react"
import { useTheme } from "styled-components"
import { Card } from "../../components/Card"
import { CoffeeList, Heading, Hero, HeroContent, Info } from './styles'

export function Home (){
  const theme = useTheme()
  return(
    <div>
      <Hero>
        <HeroContent>
          <div>
            <Heading>
              <h1>Savor the perfect brew, no matter the time of day!</h1>
              <span>With Coffee Delivery, your coffee finds you—anywhere, anytime!</span>
            </Heading>

            <Info>
              <div>
                <ShoppingCart
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors['yellow-dark']}}
                />
                <span>Simple and safe purchase</span>
              </div>
              <div>
                <Package
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors['base-text'] }}
                />
                <span>Packaging keeps coffee intact</span>
              </div>
              <div>
                  <Timer
                    size={32}
                    weight="fill"
                    color={theme.colors.background}
                    style={{ backgroundColor: theme.colors.yellow }}
                  />
                  <span>Fast and tracked delivery</span>
                </div>

                <div>
                  <Coffee
                    size={32}
                    weight="fill"
                    color={theme.colors.background}
                    style={{ backgroundColor: theme.colors.purple }}
                  />
                  <span>Fresh coffee, delivered straight to you!</span>
                </div>
            </Info>
          </div>
          <img src="images/hero.svg" alt="Coffee Delivery Coffee" />
        </HeroContent>
        <img src="images/hero-bg.svg" id="hero-bg" alt="" />
      </Hero>

      <CoffeeList>
        <h2>Our Coffees</h2>
        <div>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </CoffeeList>
    </div>
  )
}