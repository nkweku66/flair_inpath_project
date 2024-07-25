import GlobalStyles from "./App.styles"
import { Outlet } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <>
       <GlobalStyles />
       <Outlet />
    </>
  )
}


export default App
