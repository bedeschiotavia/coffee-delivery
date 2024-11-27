import { ThemeProvider } from "styled-components"

import { Header } from "./components/Header"

import { Success } from "./pages/Success"
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle/>
        <Header/>
        <Success/>
      </ThemeProvider>
    </>
  )
}

export default App
