import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-600']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap; /*Para quando a tela for menor quebrar o campo em mais linhas*/
`

export const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 1px solid ${(props) => props.theme['gray-500']};
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-600']};

  &:focus {
    box-shadow: none; /*retira a caixa do input*/
    border-color: ${(props) => props.theme['blue-700']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`
export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`
