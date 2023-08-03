import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
  HomeContainer,
  FormContainer,
  CountdownContainer,
  Separator,
  StartCountdownButton,
  TaskInput,
  MinutesAmountInput,
} from './styles'
import { useState } from 'react'

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

interface Cycle {
  id: string // para representar o cada ciclo individualmente
  task: string
  minutesAmount: number
}
export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const { register, handleSubmit, watch, reset } = useForm<NewcycleDataForm>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  function handleCreateNewCycle(data: NewcycleDataForm) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()), //data atual convertida pra mls e p\ string
      task: data.task,
      minutesAmount: data.minutesAmount,
    }

    setCycles((state) => [...state, newCycle]) // adicionando o novo ciclo no array
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestion"
            placeholder="Nome para seu projeto"
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
            {...register('minutesAmount', { valueAsNumber: true })}
          />
          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
