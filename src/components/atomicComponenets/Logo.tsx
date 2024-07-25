import { ImageWrapper,Logo } from '../styles/UniversalStyles'
interface Props {
    children?: JSX.Element;
}

const LogoSection = (props: Props) => {
    return (
        <ImageWrapper>
            {props.children}
            <Logo src="../images/logo.png"/>
        </ImageWrapper>
    )
}

export default LogoSection