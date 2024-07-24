import * as S from "./Navbar.styles"

const NavBar = () => {
    return (
        <>
            <S.Header>
                <S.HeaderName selected>For Students & Graduates</S.HeaderName>
                <S.HeaderName >For Partners</S.HeaderName>
            </S.Header>
            <S.NavBarContainer>
                <S.NavBarLogo src="./src/assets/images/logo.png" />
                <S.NavBarMenu>
                    <S.HamburgerLines />
                    <S.HamburgerLines />
                    <S.HamburgerLines />
                </S.NavBarMenu>
            </S.NavBarContainer>
        </>
    )
}

export default NavBar