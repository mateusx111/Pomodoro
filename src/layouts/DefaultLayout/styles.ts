import styled from 'styled-components'

export const LayoutConainer = styled.div`
  max-width: 74rem;
  /* tamanho da altura total da tela menos um tanto */
  height: calc(100vh - 10rem);
  /* Tirandpo os 10rem dá para fazer um margin de 5rem em cima e em baixo e ou nas laterais para centralizar */
  margin: 5rem auto;
  padding: 2.5rem;

  background: ${(props) => props.theme.white};
  border-radius: 8px;

  /* o header e o conteúdo seguem um padão de copluna */
  display: flex;
  flex-direction: column;
`
