import { MapPin, ShoppingCart } from "@phosphor-icons/react"
import { Aside, Container } from "./style"

export function Header() {
  return (
    <Container>
      <img src="../../../public/logo.svg" alt="Coffee Delivery"/>
      <Aside>
        <div>
          <MapPin size={22} weight="fill"/>
          <span>Coimbra, PT</span>
        </div>
        <a href="">
          <ShoppingCart size={22} weight="fill"/>
          <span>3</span>
        </a>
      </Aside>
    </Container>
  )
}