import { ImageWrapper,Logo } from '../styles/UniversalStyles'

const LogoSection = (props: {children: JSX.Element}) => {
    return (
        <ImageWrapper>
            {props.children}
            <Logo src="./src/assets/images/logo.png"/>
        </ImageWrapper>
    )
}

export default LogoSection