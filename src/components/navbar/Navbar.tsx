import { useState, useEffect, useRef } from "react"
import * as S from "./Navbar.styles"
import Button from "../atomicComponenets/Button"
import { Link } from "react-router-dom"

const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const menuRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const closeMenu = (e: MouseEvent) => {
          if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
            setOpenMenu(false);
          }
        };
        if (openMenu) {
          document.addEventListener('mousedown', closeMenu); 
        }
        return () => {
          document.removeEventListener('mousedown', closeMenu);
        };
      }, [openMenu]);


    const toggleMenu = () => {
        setOpenMenu((prev) => !prev)
    }

    return (
        <>
            <S.Header>
                <S.HeaderName selected>For Students & Graduates</S.HeaderName>
                <S.HeaderName >For Partners</S.HeaderName>
            </S.Header>
            <S.NavBarContainer>
                <Link to="/"><S.NavBarLogo src="../images/logo.png"/></Link>
                <S.NavBarMenu>
                    <S.NavButtons>
                      <Button text="Login" variant visible />
                      <Button text="Signup" path="/signup" visible/>
                    </S.NavButtons>
                    <S.HamburgerMenu onClick={toggleMenu} openMenu={openMenu}>
                        <S.HamburgerLines openMenu={openMenu} />
                        <S.HamburgerLineTwo openMenu={openMenu} />
                        <S.HamburgerLineThree openMenu={openMenu} />
                    </S.HamburgerMenu>
                    <S.NavBarMenuLinks openMenu={openMenu} ref={menuRef}>
                        <S.NavMenuLink to='/jobs' openMenu={openMenu}>Jobs</S.NavMenuLink>
                        <S.NavMenuLink to='/mentorship' openMenu={openMenu}>Mentorship</S.NavMenuLink>
                        <S.NavMenuLink to='/trainings' openMenu={openMenu}>Trainings</S.NavMenuLink>
                        <S.NavMenuLink to='/login' openMenu={openMenu}>Login</S.NavMenuLink>
                        <S.NavMenuLink to='/signup' openMenu={openMenu}>Sign Up</S.NavMenuLink>
                    </S.NavBarMenuLinks>
                </S.NavBarMenu>
            </S.NavBarContainer>
        </>
    )
}

export default NavBar