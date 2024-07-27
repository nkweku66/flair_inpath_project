import styled from 'styled-components'

interface Props {
    variant?: boolean;
    variant2?: boolean;
    selected?: boolean;
    openClose?: boolean;
}
const Wrapper = styled.div`
    padding: 1.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media screen and (min-width: 744px) {
        padding: 48px 2.5em;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        gap: 1.5em;
        // border: 1px solid red;
    }

    @media screen and (min-width: 1024px){
        padding: 48px 376px 0 104px; 
        justif-content: center;
        gap: 5em;
    }
`
const ProfileCards = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
`

const AddAccordion = styled.div`
    // border: 1px solid red;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 80%;
    z-index: 99;
    cursor: pointer;

`
const CardLines = styled.span<Props>`
    width: 2px;
    height: 15px;
    // margin: 0 auto;
    background-color: #000;
    cursor: pointer;
    transition: transform .3s ease-in-out, scale .3s ease-in-out;
    transform: ${(props) => props.selected? "scale(0)" : "scale(1)"};
`

const CardVerticalLine = styled(CardLines)<Props>`
    transform: ${(props) => props.selected? "translate3d(0, 0, 0) rotate(270deg)" : "translate3d(-1px, 0, 0) rotate(90deg)"};
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
    width: 205px;
    height: 88px;
    padding: 2px;
    display: flex;
    color: #fff;
    justify-content: space-between;
    align-items: center;
    padding: 20px 16px;
    margin: 1.5em 0;
    font-weight: 600;
    background: url('../images/greenbackground.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    
    position: relative;

    @media screen and (min-width: 744px) {
        margin: 0;

        &::after {
            content: "";
            background: #0b8659;
            width: 100%;
            height: 336px;
            position: absolute;
            top: 100%;
            left: 0;
        }
    }

    @media screen and (min-width: 1024px){
        width: 272px;
        gap: 3em;
    }
`

const ProfileAsideDetails = styled.aside`
    display: none;
    @media screen and (min-width: 744px) {
        position: absolute;
        top: 100%;
        
        z-index: 2;
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 2em;
        width: 100%;
        height: 100%;
    }

    @media screen and (min-width: 1024px) {
        // margin-top: 2rem;
    }
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

const ProfileHeading = styled.h3<Props>`
    font-size: ${(props) => {
        if (props.variant) return "1.2rem";
        else if (props.variant2) return "0.8rem"
        else return "1rem" 
        }
    };
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

    @media screen and (min-width: 744px) {
        margin-left: 0;
        margin-top: 0;
        gap: 1em;
    }
)
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
    cursor: pointer;
    transition: background .3s ease-in-out, color .3s ease-in-out;

    &:hover {
        background-color: #0B8659;
        color: #fff;
    }

    @media screen and (min-width: 744px) {
        width: 100%;
    }
`
const ProfileCardIcon = styled.img`
    width: 20px;
    height: 20px;
    object-fit: contain;
    margin-right: 1em;
`

const ProfileForm = styled.div`
    width: 100%;
    position: relative;

    @media screen and (min-width: 1024px) {
        width: 608px;
        padding-bottom: 328px;
    }
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
    ProfileGreenCard,
    ProfileForm,
    ProfileAsideDetails,
    AddAccordion
}
