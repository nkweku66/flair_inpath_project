import Navbar from "./components/navbar/Navbar"
import GlobalStyles from "./App.styles"
import SearchSection from "./components/searchTool/SearchSection"

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <SearchSection />
    </>
  )
}


export default App
