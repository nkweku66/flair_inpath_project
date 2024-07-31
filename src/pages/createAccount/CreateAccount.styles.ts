import styled from "styled-components"
import { FaArrowLeft } from "react-icons/fa6";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import { Link } from 'react-router-dom'

// interface Props {
//     variant?: boolean;
// }
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0 1.5em;
    position: relative;

    @media screen and (min-width: 744px) {
        padding: 56px 164px 0 164px;
    }

    @media screen and (min-width: 1024px) {
        padding: 72px 500px 218px 500px;
    }
)
`
const Lable = styled.label`
    font-size: .9rem;
    margin-bottom: 6px;
    color: #818181;
    text: align
    font-weight: 400;
`
const Inputs = styled.section`
    position: relative;
    width: 100%;
`

const PasswordIcon = styled.img`
    width: 24px;
    position: absolute;
    top: 55%;
    transform: translate(-50%, -50%);
    left: 93%;
    font-size: 1.3em;
`
const DropIcon = styled.img`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 90%;
    width: 12.73px;
    height: 7.7px;
    cursor: pointer;

    @media screen and (min-width: 744px) {
        top: 55%;
        left: 85%;
    }


`
const SubText = styled.span`
    display: flex;
    width: 58%;
    justify-content: space-between;
    align-items: flex-end;
    cursor: pointer;
    font-size: .9rem;
    margin-bottom: 16px;
    position: relative;
    top: -2em;

    @media screen and (min-width: 744px) {
        width: 48%;
    }

    @media screen and (min-width: 1024px){
        margin-top: 1.5em;
        width: 50%;
        top: 0;
    }
)
`

const Phone = styled(PhoneInputWithCountrySelect)`
    border: none;
    width: 100%;
    height: 48px;
    margin-bottom: 16px;

    .PhoneInputInput {
        border: 1px solid #818181;
        width: 100%;
        height: 100%;
        padding-left: 70px;
        background: transparent;
    }

    .PhoneInputCountry {
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
        width: 24px;
        height: 16px;
        font-family: "EudoxusSans", san-serif;
        font-size: 1rem;
    }

    .PhoneInputCountrySelect {
        position: absolute;
        width: 20px;
        left: 20px;
        background: none;
        border: none;
        outline: none;
        border-radius: 3px;
    }

    .PhoneInputCountryList {
        font-family: "EudoxusSans", san-serif;
        font-size: 1rem;
    }

    .PhoneInputCountryOption {
        font-family: "EudoxusSans", san-serif;
        font-size: 1rem;
    }

    .PhoneInputInput:focus {
        outline: 2px solid #0B8659;
        border: none;
    }
    &:hover {
        border: 1px solid #0B8659;
    }

`

const Colored = styled.span`
    color: #0B8659;
`

const Heading = styled.h3`
    font-size: 1.13rem;
    margin-bottom: 16px;
`

const SubmitButton = styled(Link)`
    width: 100%;
    text-decoration: none;
`
const BackArrow = styled(FaArrowLeft)`
    font-size: 1.2rem;
`

const InputsWrap = styled.div`
    width: 100%;

    @media screen and (min-width: 744px){
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1em;
    }
`

export {
    Form,
    Lable,
    SubmitButton,
    BackArrow,
    Heading,
    SubText,
    Colored,
    Phone,
    PasswordIcon,
    DropIcon,
    Inputs,
    InputsWrap
}
