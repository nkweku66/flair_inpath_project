import {styled} from 'styled-components'
import { Link } from 'react-router-dom';

interface NavBarProps {
    selected?: boolean;
    openMenu?: boolean;
}

const Header = styled.header`
    background-color: #F7F7F7;
    margin: 10.5px 8px;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 99;

    @media screen and (min-width: 744px) {
        margin: 8px 202.5px 8px 202.5px;
        width: 339px;
    }

    @media screen and (min-width: 1024px){
        margin: 0 auto;
    }
`

const HeaderName = styled.h3<NavBarProps>`
    background: ${(props) => (!props.selected ? 'transparent' : '#fff')};
    box-shadow: ${(props) => (!props.selected ? '' : '2px 2px 8px rgba(0, 0, 0, 0.2)')};
    font-size: 14px;
    font-weight: ${(props) => (!props.selected ? "500" : "Bold")};
    padding: 5px 16px;
`
const NavBarContainer = styled.nav`
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5em 1em;
    border-top: .5px solid rgba(224, 224, 224, 0.3);
    position: relative;
    // border: 1px solid red;

    @media screen and (min-width: 1024px){
        padding: 27px 72px;
    }
`

const NavButtons = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    height: 48px;
    // border: 1px solid red;
    position: absolute;
    top: 50%;
    left: 81%;
    transform: translate(-50%, -50%);

    @media screen and (min-width: 1024px){
        left: 90%;
    }

`

const NavBarLogo = styled.img`
    height: 1.5em;
`

const NavBarMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .3rem;
    
`

const NavBarMenuLinks = styled.ul<NavBarProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    text-decoration: none;
    margin: 0;
    padding: 2.5em 0;
    color: #fff;

    position: absolute;
    z-index: 1;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: ${(props) => props.openMenu ? '50vh' : '0'};
    opacity: ${(props) => props.openMenu ? '1' : '0'};
    visibility: ${(props) => props.openMenu ? 'visible' : 'hidden'};
    overflow: hidden;
    background-color: #0B8659;
    box-shadow: 0 0 100px 10000px rgba(0, 0, 0, 0.5);
    transition: height .5s cubic-bezier(.14,.65,.15,1), opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;

    @media screen and (min-width: 1024px){
        display: none;
    }
    
`
const NavMenuLink = styled(Link)<NavBarProps>`
    text-decoration: none;
    color: #fff;
    opacity: ${(props) => props.openMenu ? '1' : '0'};
    visibility: ${(props) => props.openMenu ? 'visible' : 'hidden'};
    transition: opacity .3s ease-in-out, visibility .3s ease-in-out;

    &:hover {
        color: lightGray;
    }
`
const HamburgerMenu = styled.div<NavBarProps>`
    width: 1.2em;
    height: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    // border: 1px solid red;

    // position: relative;
    z-index: ${(props) => (props.openMenu ? '2' : 'auto')}

    @media screen and (min-width: 1024px){
        display: none;
        z-index: 0;
    }
`

const HamburgerLines = styled.span<NavBarProps>`
    background-color: ${(props) => (props.openMenu ? '#fff' : '#000')};
    border-radius: 1rem;
    width: 1.2em;
    height: 2px;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, background-color 0.3s ease-in-out;

    transform: ${(props) => props.openMenu? 'translate3d(0,10px,0) rotate(45deg)' : 'translate3d(0,0,0) rotate(0)'};
`

const HamburgerLineTwo = styled(HamburgerLines)`
    transform: ${(props) => props.openMenu? 'scale(0)' : 'scale(1)'};
`

const HamburgerLineThree = styled(HamburgerLines)`
    transform: ${(props) => props.openMenu? 'translate3d(0,-4px,0) rotate(-45deg)' : 'translate3d(0,0,0) rotate(0)'};
`

export {
    Header,
    HeaderName,
    NavBarContainer,
    NavBarLogo,
    NavBarMenu,
    NavBarMenuLinks,
    NavMenuLink,
    HamburgerMenu,
    HamburgerLines,
    HamburgerLineTwo,
    HamburgerLineThree,
    NavButtons,
}