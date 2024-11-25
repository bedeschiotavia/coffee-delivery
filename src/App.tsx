import { ThemeProvider } from "styled-components"

import { Card } from "./components/Card"

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle/>
        <Card/>
      </ThemeProvider>
    </>
  )
}

export default App
