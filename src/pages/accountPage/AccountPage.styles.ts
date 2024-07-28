import { FaArrowRight } from "react-icons/fa6";
import styled from "styled-components"
import { Link } from 'react-router-dom'

interface AccountProps {
    textColor?: boolean;
    width?: string;
    comingSoon?: boolean;
    selected?: boolean;
    onClick?: () => void;
    heading?: boolean;
    disabled?: boolean;
}

const AccountWrapper = styled.section`
    padding: 0 1em;
    width: 100%;

    @media screen and (min-width: 744px){
        padding: 72px 92px;
    }

    @media screen and (min-width: 1024px){
        padding: 98px 393px 302px 393px;
    }
`
const CardsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media screen and (min-width: 744px){
        display: grid;
        grid-template: repeat(2, 176px) / repeat(2, 268px);
        grid-gap: 24px;
        justify-content: space-between;
        align-items: flex-end;
        margin: 2.5em 0 2.5em 0;
        // border: 1px solid red;
    }
`

const ImageWrapper = styled.div`
    padding: 18px 131.5px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
    margin-bottom: 24px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 744px){
        padding: 0;
    }
`

const Logo = styled.img`
    width: 65px;
    height: 20px;
    margin: 0 auto;

    @media screen and (min-width: 744px){
        width: 78px;
        height: 24px;
        margin: 0 auto;
    }
`
const CardImage = styled.img<AccountProps>`
    width: ${(props) => props.width || '76px'};
    height: 56px;
    margin-bottom: 1em;
`
const Heading = styled.h3`
    font-weight: 600;
    font-size: 1.1rem;

    @media screen and (min-width: 1024px){
        font-size: 1.5rem;
    }
`
const Text = styled.p<AccountProps>`
    font-weight: ${(props) => (props.textColor ? '' : '600')};
    font-size: ${(props) => {
        if (props.textColor) return '.9rem';
        if (props.comingSoon) return '12px';
        if (!props.comingSoon || !props.textColor) return "1.1rem";
    }};

    color: ${(props) => (props.textColor ? '#818181' : '')};
    margin-top: ${(props) => (props.textColor ? '16px' : '')};

    position: ${(props) => props.comingSoon ? "absolute" : ""};
    top: 0;
    left: 72.6%;
    padding: ${(props) => props.comingSoon ? ".2em .5em" : ""};
    background-color: ${(props) => props.comingSoon ? "#FCF4E6" : ""};
    color: ${(props) => props.comingSoon ? "#D98F00" : ""};

    @media screen and (min-width: 744px) {
        font-size: ${(props) => {
            if (props.textColor) return '.9rem';
            if (props.comingSoon) return '12px';
            if (!props.comingSoon || !props.textColor) return "1.1rem";
        }};
        left: 66%;
    }
`
const Card = styled.div<AccountProps>`
    background-color: ${(props) => props.selected? '#E8E8E8' : '#F5F5F5'};
    padding: 16px;
    outline: ${(props) => props.selected ? "2px solid #0B8659" : "1px solid #818181"}; ;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 24px;
    position: relative;
    cursor: pointer;
    transition: border .5s ease-in-out;
    width: 100%;
`

const Button = styled(Link)<AccountProps>`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-family: "EudoxusSans", san-serif;
    background-color: ${(props) => props.selected ? '#000' : '#E8E8E8'};
    border: none;
    border-radius: 2px;
    color: ${(props) => props.selected ? '#fff' : '#818181'};
    pointer-events: ${props => props.disabled ? 'none' : 'auto'};
    margin: 32px 0 62px 0;
    padding: 14px 0;
    cursor: pointer;
    text-decoration: none;
    transition: .5s ease-in-out;

    &:hover{
        background-color: #1d1d1d;
    }
`
const ButtonArrow = styled(FaArrowRight)`
    font-size: 1.2rem;
    margin-left: .5em;
`

export {
    AccountWrapper,
    ImageWrapper,
    Logo,
    Text,
    Card,
    CardImage,
    Button,
    ButtonArrow,
    CardsWrapper,
    Heading
}
