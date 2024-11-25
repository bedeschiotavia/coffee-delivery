import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from "@phosphor-icons/react"
import {
  AddressContainer,
  AddressForm,
  AddressHeading,
  Container,
  InfoContainer,
  PaymentContainer,
  PaymentHeading,
  PaymentOptions,
} from "./style"

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
                placeholder="Neighbourhood"
                containerProps={{ style: { gridArea: 'neighborhood' } }}
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
            </PaymentOptions>
          </PaymentContainer>
        </form>
      </InfoContainer>

      
    </Container>
  )
}