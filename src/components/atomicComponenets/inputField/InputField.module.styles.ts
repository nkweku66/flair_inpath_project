import styled from 'styled-components'

const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 14px;
    font-weight: 400;
    color: #818181;
`

const Input = styled.input`
    width: 100%;
    height: 48px;
    border: 1px solid #E8E8E8;
    padding: 10px;
    margin-bottom: 16px;
    font-family: "EudoxusSans", san-serif;
    font-size: 0.9rem;

    &::placeholder{
        color: #818181;
    }

    &:hover {
        outline: 1px solid #0B8659;
        border: none;
    }

    &:focus {
        outline: 2px solid #0B8659;
        border: none;
    }
`
const Label = styled.label`
    font-size: .9rem;
    margin-bottom: 6px;
    color: #818181;
    text: align
    font-weight: 400;
`

export {
    Input,
    InputWrapper,
    Label
}
