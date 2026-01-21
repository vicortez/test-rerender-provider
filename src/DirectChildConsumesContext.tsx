import { useState } from 'react'
import './App.css'
import { useCounter } from './SomeProvider'

function DirectChildConsumesContext() {
  const [count, setCount] = useState(0)
  const { globalCount, setGlobalCount } = useCounter()

  const currId = crypto.randomUUID()
  console.log('the body of the function ran')

  return (
    <div className="comp">
      <p className="render-identifier">{currId}</p>
      <p>DirectChildConsumesContext</p>
      <p className="small-font">
        This container child is not memoized, so it updates if the parent container updates. Since
        it subscribes to the context, it also updates if the context changes.
      </p>
      <span>Internal counter: {count} </span>
      <button onClick={() => setCount((prev) => prev + 1)}>update internal counter</button>

      <span> global counter: {globalCount} </span>
      <button onClick={() => setGlobalCount((prev) => prev + 1)}>update global counter</button>
    </div>
  )
}

export default DirectChildConsumesContext
