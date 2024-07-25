import { FaArrowRight } from "react-icons/fa6";
import styled from "styled-components"
import { Link } from 'react-router-dom'

interface AccountProps {
    textColor?: boolean;
    width?: string;
    comingSoon?: boolean;
    selected?: boolean;
    onClick?: () => void;
}

const AccountWrapper = styled.section`
    padding: 0 1em;
`
const ImageWrapper = styled.div`
    padding: 18px 131.5px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
    margin-bottom: 24px;
`

const Logo = styled.img`
    width: 65px;
    height: 20px;
    margin: 0 auto;
`
const CardImage = styled.img<AccountProps>`
    width: ${(props) => props.width || '76px'};
    height: 56px;
    margin-bottom: 1em;
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
`
const Card = styled.div<AccountProps>`
    background-color: #F5F5F5;
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

    &:active{
        border:2px solid #000; 
    }
`

const Button = styled(Link)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-family: "EudoxusSans", san-serif;
    background-color: #000;
    border: none;
    border-radius: 2px;
    color: #fff;
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
    ButtonArrow
}