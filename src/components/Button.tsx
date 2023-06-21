import { ButtonContainer, ButtonVariant } from './Button.styles'

//interface para que não seja neccessário repetição de código
interface ButtonProps {
  variant?: ButtonVariant
}

//{ variant = 'primary' }: ButtonProps será o preset de estilo do botão assim ele nunca ficará sem estilo
export function Button({ variant = 'primary' }: ButtonProps) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}
