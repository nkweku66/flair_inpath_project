import { ImageWrapper,Logo, NavContainer } from '../styles/UniversalStyles'
interface Props {
    children?: JSX.Element;
    text?: string;
}

const LogoSection = (props: Props) => {
    return (
        <ImageWrapper>
            <NavContainer>
                {props.children}
                {props.text}
            </NavContainer>
            <Logo src="../images/logo.png"/>
        </ImageWrapper>
    )
}

export default LogoSection