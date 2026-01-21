import { useState } from 'react'
import DirectChild from './DirectChild'
import DirectChildConsumesContext from './DirectChildConsumesContext'
import DirectChildMemoized from './DirectChildMemoized'

function Container({ children }) {
  const [count, setCount] = useState(0)
  // const { globalCount, setGlobalCount } = useCounter()

  const currId = crypto.randomUUID()

  return (
    <div className="container">
      <p className="render-identifier">{currId}</p>
      <h3>container</h3>
      <p className="small-font">
        The container is defined directly inside the provider, both defined inside App.tsx. It
        doesnt subscribe to the context. It will only get re-rendered if app gets rerendered or if
        container state changes.
      </p>

      <span>Internal counter[container]: {count} </span>
      <button onClick={() => setCount((prev) => prev + 1)}>update internal counter</button>

      {/* <span>global counter: {globalCount} </span>
      <button onClick={() => setGlobalCount((prev) => prev + 1)}>update global counter</button> */}

      <h3>Children passed as props:</h3>
      {children}
      <h3>Direct children:</h3>
      <DirectChild />
      <DirectChildMemoized />
      <DirectChildConsumesContext />
    </div>
  )
}

export default Container
