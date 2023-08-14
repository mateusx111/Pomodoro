import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import * as zod from 'zod'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(5).max(60),
})

//Definindo o formato para o input cycles
// interface NewcycleDataForm {
//   id:string
//   task: string
//   minutesAmount: number
// }

type NewcycleDataForm = zod.infer<typeof newCycleFormValidationSchema>

export function NewCycleForm() {
  const { register, handleSubmit, watch, reset } = useForm<NewcycleDataForm>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

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
