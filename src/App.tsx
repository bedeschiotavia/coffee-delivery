import { ThemeProvider } from "styled-components"

import { Header } from "./components/Header"

import { Cart } from "./pages/Cart"
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle/>
        <Header/>
        <Cart/>
      </ThemeProvider>
    </>
  )
}

export default App
