import styled from 'styled-components'

// Suggested code may be subject to a license. Learn more: ~LicenseLog:3001910537.
const Wrapper = styled.div`
    padding: 2em;
`

const VerificationImage = styled.img`
    width: 106px;
    heigth: 128px;
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
`
const VerificationText = styled.p`
    font-size: .9rem;
    line-height: 140%;
    color: #818181;
`

export {
    Wrapper,
    VerificationImage
}
