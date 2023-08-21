import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../Contexts/CyclesContext'
export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestion"
        placeholder="Nome para seu projeto"
        disabled={!!activeCycle} //não permite dig. no input c/ ciclo iniciado !!boolean
        {...register('task')} //sintaxe do register do usForm
      />

      {/*Lista de sugestão para o input */}
      <datalist id="task-suggestion">
        <option value="Trabalhar"></option>
        <option value="Estudar"></option>
        <option value="Planejar"></option>
        <option value="Implementar"></option>
      </datalist>

      <label htmlFor="minutesAmount">Durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5} //pular de 5 em 5
        min={5}
        max={60}
        disabled={!!activeCycle} //não permite dig. no input c/ ciclo iniciado !!boolean
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  )
}
