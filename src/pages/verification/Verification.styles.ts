import styled from 'styled-components'

// Suggested code may be subject to a license. Learn more: ~LicenseLog:3001910537.
const Wrapper = styled.div`
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // height: 100vh;

    @media screen and (min-width: 744px) {
        padding: 169px;
    }

    @media screen and (min-width: 1440px) {
        padding: 136px 517px 374px 517px;
    }
`

const VerificationImage = styled.img`
    width: 106px;
    heigth: 128px;
    margin-top: 3em;
    margin-bottom: 40px;
`

const VerificationHeader = styled.h3`
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1.5em;
`
const VerificationBubble = styled.span`
    font-weight: 600;
    font-size: .9rem;
    padding: 8px;
    border-radius: 40px;
    background-color: #F5F5F5;
    color: #818181;
    margin-top: 2em;
    margin-bottom: 2em;
`
const VerificationText = styled.p`
    font-size: .9rem;
    line-height: 140%;
    color: #818181;
    text-align: center;
`

export {
    Wrapper,
    VerificationImage,
    VerificationHeader,
    VerificationBubble,
    VerificationText
}
