import { FaArrowRight } from "react-icons/fa6";
import styled, { keyframes } from "styled-components"

interface SearchProps{
    jobField?: boolean,
    variant1?: boolean,
    variant2?: boolean
    position?: boolean;
    variant?: boolean;
    first?: boolean;
}

const SearchContainer = styled.section`
    width: 100%;
    background-color: #F5F5F5;
    padding: 2em 1em;
    position: relative;

    @media screen and (min-width: 744px){
        padding: 148px 132px 224px 132px;
        // background: url("../images/backImage.png") center center /contain;
    }

    @media screeN and (min-width: 1024px){
        padding: 181px 380px 269px 380px;
    }
`
const SearchAreaImage = styled.img`
    position: absolute;
`

const scaleUp = keyframes`
    0% {
        transform: scale(0);
        opacity: 0;
    }
    50% {
        transform: scale(1.2);
        opacity: 1;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
`

const SearchedAreaImageOne = styled(SearchAreaImage)`
    width: 113px;
    top: 51px;
    left: 1062px;
    animation: ${scaleUp} 2s ease-in-out forwards;
`

const SearchedAreaImageTwo = styled(SearchAreaImage)`
    width: 51px;
    top: 264px;
    left: 1282px;
    animation: ${scaleUp} 2.5s ease-in-out forwards;
`

const SearchedAreaImageThree = styled(SearchAreaImage)`
    width: 114px;
    top: 255.67px;
    left: 146px;
    animation: ${scaleUp} 3s ease-in-out forwards;
`

const SearchedAreaImageFour = styled(SearchAreaImage)`
    width: 51px;
    top: 500px;
    left: 72px;
    animation: ${scaleUp} 3.5s ease-in-out forwards;
`

const SearchedAreaImageFive = styled(SearchAreaImage)`
    width: 84px;
    top: 551px;
    left: 292px;
    animation: ${scaleUp} 3.8s ease-in-out forwards;
`

const SearchedAreaImageSix = styled(SearchAreaImage)`
    width: 78.36px;
    top: 540.67px;
    left: 601.64px;
    animation: ${scaleUp} 4s ease-in-out forwards;
`

const SearchedAreaImageSeven = styled(SearchAreaImage)`
    width: 71px;
    top: 599px;
    left: 857px;
    animation: ${scaleUp} 4.3s ease-in-out forwards;
`

const SearchedAreaImageEight = styled(SearchAreaImage)`
    width: 44px;
    top: 473px;
    left: 1172px;
    z-index: 1;
    animation: ${scaleUp} 4.5s ease-in-out forwards;
`

const SearchedAreaImageNine = styled(SearchAreaImage)`
    top: 339px;
    left: 1159px;
    width: 288px;
    height: 251px;
`

const SearchHeadingsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1em;
    margin-bottom: 40px;
    width: 100%;
`
const SearchHeader = styled.h2`
    font-size: 1.8rem;
    letter-spacing: -2%;
    font-weight: 500;

    @media screen and (min-width: 1024px){
        font-size: 3.8rem;
        font-weight: 900;
        letter-spacing: -3px;
    }
`

const SearchSubHeader = styled.h2`
    font-size: 1.1rem;
    font-weight: 500;
    letter-spacing: -3%;

    @media screen and (min-width: 1024px){
        font-size: 2.25rem;
        font-weight: 500;
        letter-spacing: -1px;
    }
`

const Highlight = styled.span`
    color: #0B8659;
`

const SearchArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
    position: relative;

    @media screen and (min-width: 744px){
        width: 100%;
        flex-direction: row;
    }
`
const SearchInputWrapper = styled.div<SearchProps>`
    width: 100%;
    position: relative;
    display: flex;

    @media screen and (min-width: 744px) {
        width: 100%;
        border-radius: 40px;
        background-color: #fff;
        display: ${(props) => props.variant? "none" : "flex"};
        padding: 1em;
    }
`

const SearchInput = styled.input<SearchProps>`
    width: 328px;
    height: 48px;
    padding-left: ${(props) => (props.jobField ? "1em" : "3em")};
    border: none;
    border-radius: 2em;
    background-color: #fff;
    font-family: "EudoxusSans", sans-serif;
    font-size: 1rem;
    font-weight: 500;
    position: relative;

    &::placeholder {
        color: ${(props) => (props.jobField ? "#000" : "#ABADAE")};
    }

    @media screen and (min-width: 1024px){
        background: transparent;
        outline: none;
        border-radius: 40px 0 0 40px;
        border-right: ${(props) => props.jobField? '' : '2px solid rgba(212, 212, 212, 1)'};
        height: 26px;
        width: ${(props) => props.first? '66%' : '144px'};
        padding-left: ${(props) => (props.jobField ? "1em" : "2em")};
    }
`

const SearchButton = styled.button`
    background-color: #0B8659;
    border-radius: 50%;
    border: none;
    width: 48px;
    height: 48px;
    color: #fff;
    cursor: pointer;
    
    @media screen and (min-width: 744px){
        width: 40px;
        height: 40px;
        position: absolute;
        top: 82%;
        left: 98%;
        transform: translate(-100%, -100%);
    }
`
// Icons
const SearchArrowIcon = styled(FaArrowRight)`
    font-size: 1rem;
    color: #fff;
`
const SearchFinder = styled(SearchAreaImage)`
    width: 24px;
    color: #000;
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translate(-50%, -50%);
`

const DropDown = styled(SearchAreaImage)`
    width: 13px;
    left: 85%;
    top: 50%;
    z-index: 1;
`

export {
    SearchContainer,
    SearchAreaImage,
    SearchHeadingsWrapper,
    SearchHeader,
    SearchSubHeader,
    Highlight,
    SearchArea,
    SearchInput,
    SearchButton,
    SearchArrowIcon,
    SearchFinder,
    SearchInputWrapper,
    SearchedAreaImageOne,
    SearchedAreaImageTwo,
    SearchedAreaImageThree,
    SearchedAreaImageFour,
    SearchedAreaImageFive,
    SearchedAreaImageSix,
    SearchedAreaImageSeven,
    SearchedAreaImageEight,
    SearchedAreaImageNine,
    DropDown
}