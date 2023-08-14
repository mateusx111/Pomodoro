import { useEffect, useState } from 'react'
import { differenceInSeconds } from 'date-fns'
import { CountdownContainer, Separator } from './styles'

const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

useEffect(() => {
  let interval: number
  if (activeCycle) {
    interval = setInterval(() => {
      const secondsDifference = differenceInSeconds(
        new Date(),
        activeCycle.startDate,
      )

      if (secondsDifference >= totalSeconds) {
        setCycles((state) =>
          state.map((cycle) => {
            if (cycle.id === activeCycleId) {
              return { ...cycle, finishedDate: new Date() } //retornando nova info com a data que foi interrompido
            } else {
              return cycle
            }
          }),
        )
        setAmountSecondsPassed(totalSeconds)
        clearInterval(interval)
      } else {
        setAmountSecondsPassed(secondsDifference)
      }
    }, 1000)
  }

  return () => {
    clearInterval(interval)
  }
}, [activeCycle, totalSeconds, activeCycleId])

export function Countdown() {
  ;<CountdownContainer>
    {/* trabalhando com strings como se fossem vetores */}
    <span>{minutes[0]}</span>
    <span>{minutes[1]}</span>
    <Separator>:</Separator>
    <span>{seconds[0]}</span>
    <span>{seconds[1]}</span>
  </CountdownContainer>
}
