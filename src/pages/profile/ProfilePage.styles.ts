import styled from 'styled-components'

interface Props {
    variant?: boolean;
}
const Wrapper = styled.div`
    padding: 1.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ProfileCards = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;

`
const CardLines = styled.span`
    height: 2px;
    width: 12px;
    background-color: #000;
    position: absolute;
    left: 90%;
    transition: transform .3s ease-in-out;
`

const CardVerticalLine = styled(CardLines)`
    transform: rotate(90deg);
    
`

const ProfileCard = styled.section`
    width: 100%;
    height: 88px;
    padding: 2px;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    // border-bottom: 1px solid #818181;
    // border: 1px solid red;
    position: relative;

    &::after {
        content: "";
        background: rgba(0, 0, 0, 0.04);
        width: 80%;
        height: 2px;
        position: absolute;
        bottom: -1px;
        left: 40px;
    }
`

const ProfileGreenCard = styled.section`
    width: 100%;
    height: 88px;
    padding: 2px;
    display: flex;
    color: #fff;
    justify-content: space-between;
    align-items: center;
    padding: 20px 16px;
    margin: 1.5em 0;
    font-weight: 600;
    background: url('./src/assets/images/greenbackground.png') center center / cover;
`

const ProfileCardHeader = styled.header`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    // border: 1px solid red;
    font-size: 1rem;
    font-weight: 600;
`

const ProfileText = styled.p`
    font-size: .9rem;
    font-weight: 400;
    margin-bottom: 20px;
    margin-top: 8px;
    margin-left: 2.6em;
    color: #818181;
`

const ProfileHeading = styled.h3`
    font-size: 1rem;
    font-weight: 600;
    // margin-bottom: 2em;
`
const ProfileBtnContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 1em 1.7em;
    gap: .5em;
    margin-left: -48px;
    margin-top: 52px;
    // border: 1px solid red;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
`
const ProfileBtn = styled.button<Props>`
    width: 152px;
    height: 48px;
    padding: 14px 0;
    border: ${(props) => props.variant? "none" : "1px solid rgba(0, 0, 0, 0.2)"};
    background: ${(props) => props.variant? "#E8E8E8" : "transparent"};
    color: ${(props) => props.variant? "#818181" : "#000"};
    font-family: inherit;
    font-weight: 600;
`
const ProfileCardIcon = styled.img`
    width: 20px;
    height: 20px;
    object-fit: contain;
    margin-right: 1em;
`

export {
    Wrapper,
    ProfileCard,
    ProfileHeading,
    ProfileBtn,
    ProfileCards,
    ProfileBtnContainer,
    ProfileCardIcon,
    ProfileText,
    ProfileCardHeader,
    CardLines,
    CardVerticalLine,
    ProfileGreenCard
}
