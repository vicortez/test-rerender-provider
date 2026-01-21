/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react'

const counterContext = createContext<{
  globalCount: number
  setGlobalCount: Dispatch<SetStateAction<number>>
} | null>(null)

// 2. define custom hook to use it
export const useCounter = () => {
  const context = useContext(counterContext)

  if (!context) {
    throw new Error('missing context')
  }
  return context
}

// 3. define dedicated provider that seeds value from own state
const SomeProvider = ({ children }) => {
  const [globalCount, setGlobalCount] = useState(0)
  const [unrelatedNumber, setUnrelatedNumber] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setUnrelatedNumber(() => {
        // console.log('Just updated internal provider state (but unrelated to the provided value)')
        return Math.floor(Math.random() * 10)
      })
    }, 3000)
  }, [])
  console.log('SomeProvider has ran!')

  // const value = { globalCount, setGlobalCount } // //<- causes all hook users to re-render
  const value = useMemo(() => ({ globalCount, setGlobalCount }), [globalCount]) // <- new
  return <counterContext.Provider value={value}>{children}</counterContext.Provider>
}

export default SomeProvider
