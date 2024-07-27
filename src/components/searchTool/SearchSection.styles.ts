import { FaAngleDown, FaArrowRight, FaMagnifyingGlass } from "react-icons/fa6"
import styled from "styled-components"

interface SearchProps{
    jobField?: boolean,
    variant1?: boolean,
    variant2?: boolean
    position?: boolean;
    variant?: boolean;
}

const SearchContainer = styled.section`
    width: 100%;
    background-color: #F5F5F5;
    padding: 2em 1em;
    position: relative;
    border: 1px solid red;

    @media screen and (min-width: 744px){
        padding: 148px 132px 224px 132px;
        // background: url("../images/backImage.png") center center /contain;
    }

    @media screeN and (min-width: 1440px){
        padding: 148px 402px 269px 402px;
    }
`
const SearchAreaImage = styled.img<SearchProps>`
    width: ${(props) => (props.variant1 ? '32px' : '48px')};
    height: ${(props) => (props.variant1 ? '32px' : '48px')};
    margin: ${(props) => (props.variant1 || props.variant2 ? "" : "0 130px 16px 182px")};
    object-fit: cover;
    position: ${(props) => (props.variant1 ? "absolute" : "relative")};
    top: ${(props) => (props.variant1 ? "37%" : "")};
    left: ${(props) => { 
        if (props.variant1) return "88%";
        if (props.variant2) return "9%";
    }};
    transform: ${(props) => (props.variant1 ? "translate(-50%, -50%)" : "")};

    @media screen and (min-width: 744px){
        width: 100%;
        height: 519px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
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

    @media screen and (min-width: 1440px){
        font-size: 4rem;
        font-weight: 600;
        letter-spacing: -3px;
    }
`

const SearchSubHeader = styled.h2`
    font-size: 1.1rem;
    font-weight: 500;
    letter-spacing: -3%;

    @media screen and (min-width: 1440px){
        font-size: 2.25rem;
        font-weight: 600;
        letter-spacing: -3%;
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

    &::placeholder {
        color: ${(props) => (props.jobField ? "#000" : "#ABADAE")};
    }

    @media screen and (min-width: 1024px){
        background: none;
        border-radius: 0;
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
        position: absolute;
        top: 82%;
        left: 98%;
        transform: translate(-100%, -100%);
    }
`
// Icons
const SearchFinder = styled(FaMagnifyingGlass)`
    color: #818181;
    font-size: 1.3rem;
    position: absolute;
    top: 50%;
    left: 8%;
    transform: translate(-50%, -50%);

    @media screen and (min-width: 744px){
        left: 5%;
    }

`
const SearchArrowIcon = styled(FaArrowRight)`
    font-size: 1rem;
    color: #fff;
`
const SearchDropdown = styled(FaAngleDown)`
    color: #000;
    position: absolute;
    top: 50%;
    left: 92%;
    transform: translate(-50%, -50%);
`



// const SearchJob = styled.input`
// `
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
    SearchDropdown,
    SearchInputWrapper
}