import styled, { css } from 'styled-components' //css para ficar com as cores do css

//cores definidas na const buttonVariants
export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
}

interface ButtonContainerProps {
  variant: ButtonVariant
}

//um componente estilizados que esta o elemento button do html
//para que o Button Container receba as props de variant colocar <ButtonContainerProps> depois do elemento HTML
export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 8px;
  margin: 8px;

  background-color: ${(props) => props.theme['blue-500']};
  color: ${(props) => props.theme.white};
  //interpolação de string
  //o styled component fará que com o codigo dessa interpolção seja executado como uma função
  // essa prop serrá a variant
  /* ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `
  }} */
`
