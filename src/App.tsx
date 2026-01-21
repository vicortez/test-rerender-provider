import './App.css'
import Component1 from './Component1'
import Container from './Container'
import SomeProvider from './SomeProvider'

function App() {
  return (
    <>
      <SomeProvider>
        <Container>
          <Component1
          //  extraText="Since this component is a direct child of App, it cant read the global context, and will only re-render if App.tsx rerenders"
          />
          <Component1
          // extraText="Since this component is a direct child of App, it cant read the global context, and will only re-render if App.tsx or itself rerenders"
          />
        </Container>
        <Component1 extraText="Outside of main container, inside provider" />
      </SomeProvider>
    </>
  )
}

export default App
