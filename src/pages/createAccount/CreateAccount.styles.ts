import styled from "styled-components"
import { FaArrowLeft, FaCaretDown, FaEyeSlash } from "react-icons/fa6";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import { Link } from 'react-router-dom'

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0 1.5em;
    position: relative;
`
const Lable = styled.label`
    font-size: .9rem;
    margin-bottom: 6px;
    color: #E5E5E5;
    text: align
    font-weight: 400;
`
const InputField = styled.input`
    border: none;
    width: 100%;
    height: 48px;
    border: 1px solid #818181;
    padding: 10px;
    margin-bottom: 16px;
    font-family: "EudoxusSans", san-serif;
    font-size: 0.9rem;
    
    &::placeholder{
        color: #E5E5E5
    }

    &:focus {
        outline: 2px solid #0B8659;
        border: none;
    }
`

const Inputs = styled.section`
    position: relative;
    width: 100%;
`

const PasswordIcon = styled(FaEyeSlash)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 90%;
    font-size: 1.3em;
`
const DropIcon = styled(FaCaretDown)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 90%;
    font-size: 1.3em;


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

export {
    Form,
    Lable,
    InputField,
    SubmitButton,
    BackArrow,
    Heading,
    SubText,
    Colored,
    Phone,
    PasswordIcon,
    DropIcon,
    Inputs
}
