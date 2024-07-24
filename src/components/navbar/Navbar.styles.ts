import {styled} from 'styled-components'

interface NavBarProps {
    selected?: boolean;
}

const Header = styled.header`
    background-color: #F7F7F7;
    margin: 10.5px 8px;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    padding: 1rem;
    border-top: .5px solid rgba(224, 224, 224, 0.3);
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
const HamburgerLines = styled.span`
    background-color: #000;
    border-radius: 1rem;
    width: 1.2em;
    height: 2px;
`

export {
    Header,
    HeaderName,
    NavBarContainer,
    NavBarLogo,
    NavBarMenu,
    HamburgerLines
}