import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function DirectChild() {
  const [count, setCount] = useState(0)

  const currId = crypto.randomUUID()
  console.log('the body of the function ran')

  return (
    <div className="comp">
      <p className="render-identifier">{currId}</p>
      <p>DirectChild</p>

      <span>Internal counter: {count} </span>
      <button onClick={() => setCount((prev) => prev + 1)}>update internal counter</button>
    </div>
  )
}

export default DirectChild
