import * as S from './Verification.styles'
import Color from "../../components/atomicComponenets/Colored"
import Logo from "../../components/atomicComponenets/Logo"
import { Link } from 'react-router-dom'

const Verification = () => {
    return (
        <>
            <Logo
            />
            <S.Wrapper>
                <S.VerificationImage src="../src/assets/images/verification.png"/>
                <S.VerificationHeader>Verify your account</S.VerificationHeader>
                <S.VerificationText>A verification email will be sent to your email address provided. Click on the link in the mail to verify your account.</S.VerificationText>
                <S.VerificationBubble>mic***@inpathgroup.africa</S.VerificationBubble>
                <Link to="/career">
                    <Color text="Resend link" bold />
                </Link>
            </S.Wrapper>
        </>
    )
}

export default Verification;