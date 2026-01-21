import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import { useCounter } from './SomeProvider'
import viteLogo from '/vite.svg'

interface Props {
  extraText?: string
}

function Component1({ extraText }: Props) {
  const [count, setCount] = useState(0)

  const { globalCount, setGlobalCount } = useCounter()

  const currId = crypto.randomUUID()
  console.log('the body of the function ran')

  return (
    <div className="comp">
      <p className="render-identifier">{currId}</p>
      <p>Component1</p>
      <p className="small-font">{extraText}</p>
      <span>Internal counter: {count} </span>
      <button onClick={() => setCount((prev) => prev + 1)}>update internal counter</button>

      <span> global counter: {globalCount} </span>
      <button onClick={() => setGlobalCount((prev) => prev + 1)}>update global counter</button>
    </div>
  )
}

export default Component1
