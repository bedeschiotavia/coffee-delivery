import { Bank, CreditCard, CurrencyDollar, MapPin, Money, Trash } from "@phosphor-icons/react"
import {
  AddressContainer,
  AddressForm,
  AddressHeading,
  CartTotal,
  CartTotalInfo,
  CheckoutButton,
  Coffee,
  CoffeeInfo,
  Container,
  InfoContainer,
  PaymentContainer,
  PaymentErrorMessage,
  PaymentHeading,
  PaymentOptions,
} from "./style"

import { Fragment } from "react"
import { QuantityInput } from "../../components/Form/QuantityInput"
import { Radio } from "../../components/Form/Radio"
import { TextInput } from "../../components/Form/TextInput"

export function Cart() {
  return(
    <Container>
      <InfoContainer>
        <h2>Complete your order</h2>
        <form>
          <AddressContainer>
            <AddressHeading>
              <MapPin size={22}/>
              <div>
                <span>Shipping address</span>
                <p>Enter the address where you wish to receive your order</p>
              </div>
            </AddressHeading>

            <AddressForm>
            <TextInput
                placeholder="Postal Code"
                type="number"
                containerProps={{ style: { gridArea: 'cep' } }}
              />

              <TextInput
                placeholder="Street"
                containerProps={{ style: { gridArea: 'street' } }}
              />

              <TextInput
                placeholder="Number"
                containerProps={{ style: { gridArea: 'number' } }}
              />

              <TextInput
                placeholder="Complement"
                optional
                containerProps={{ style: { gridArea: 'fullAddress' } }}
              />

              <TextInput
                placeholder="City"
                containerProps={{ style: { gridArea: 'city' } }}
              />

              <TextInput
                placeholder="State"
                maxLength={2}
                containerProps={{ style: { gridArea: 'state' } }}
              />
            </AddressForm>
          </AddressContainer>

          <PaymentContainer>
            <PaymentHeading>
              <CurrencyDollar size={22} />

              <div>
                <span>Payment</span>

                <p>
                Payment is made on delivery. Choose the method you wish to pay
                </p>
              </div>
            </PaymentHeading>

            <PaymentOptions>
              <div>
                <Radio
                  value="credit" isSelected={true}                >
                  <CreditCard size={16} />
                  <span>Credit Card</span>
                </Radio>

                <Radio
                  isSelected={false}
                  value="debit"
                >
                  <Bank size={16} />
                  <span>Debit Card</span>
                </Radio>

                <Radio
                  isSelected={false}
                  value="cash"
                >
                  <Money size={16} />
                  <span>Cash</span>
                </Radio>
              </div>
              <PaymentErrorMessage>

              </PaymentErrorMessage>
            </PaymentOptions>
          </PaymentContainer>
        </form>
      </InfoContainer>

      <InfoContainer>
        <h2>Selected coffees</h2>

        <CartTotal>
          <Fragment>
            <Coffee>
              <div>
                <img src="images/coffees/americano.png" alt=""/>

                <div>
                  <span>Americano</span>

                  <CoffeeInfo>
                    <QuantityInput/>

                    <button>
                      <Trash />
                      <span>Remove</span>
                    </button>
                  </CoffeeInfo>
                </div>
              </div>

              <aside>€ 3.5</aside>
            </Coffee>
            <span />
          </Fragment>
          <Fragment>
            <Coffee>
              <div>
                <img src="images/coffees/americano.png" alt=""/>

                <div>
                  <span>Americano</span>

                  <CoffeeInfo>
                    <QuantityInput/>

                    <button>
                      <Trash />
                      <span>Remove</span>
                    </button>
                  </CoffeeInfo>
                </div>
              </div>

              <aside>€ 3.5</aside>
            </Coffee>
            <span />
          </Fragment>
          
          <CartTotalInfo>
            <div>
              <span>Total items</span>
              <span>
                € 7
              </span>
            </div>

            <div>
              <span>Delivery fee</span>
              <span>
                € 1,56
              </span>
            </div>

            <div>
              <span>Total</span>
              <span>
                € 8,58
              </span>
            </div>
          </CartTotalInfo>

          <CheckoutButton type="submit" form="order">
            Confirm your order
          </CheckoutButton>
        </CartTotal>
      </InfoContainer>
    </Container>
  )
}