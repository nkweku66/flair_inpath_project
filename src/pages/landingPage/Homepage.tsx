import Navbar from "../../components/navbar/Navbar"
import SearchSection from "../../components/searchTool/SearchSection"
import GlobalStyles from "../../App.styles"

const LandingPage = () => {
    return (
        <>
            <GlobalStyles />
            <Navbar />
            <SearchSection />
        </>
    )
}

export default LandingPage;