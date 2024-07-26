import { Link } from 'react-router-dom';
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
                <Link to="/signup">{props.text}</Link>
            </NavContainer>
            <Logo src="../images/logo.png"/>
        </ImageWrapper>
    )
}

export default LogoSection