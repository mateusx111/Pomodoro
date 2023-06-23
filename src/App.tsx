import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    //o thema só vai ser aplicado para elementos que estiverem dendtro do ThemeProvider
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="danger" />
      <Button variant="success" />
      <Button />
      <GlobalStyle />
    </ThemeProvider>
  )
}
