import styled from 'styled-components'

interface CareerProps {
    background?: string;
}

const Wrapper = styled.section`
    padding: 0 1.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 744px) {
        padding: 48px 164px;
    }

    @media screen and (min-width: 1024px) {
        padding: 72px 512px 428px 512px;
    }
`

const CareerHeading = styled.h3`
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 2em;

    @media screen and (min-width: 1024px) {
        font-size: 1.5rem;
    }
`

const CareerContainer = styled.div`
    dislay: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

const CareerButton = styled.button<CareerProps>`
    width: 100%;
    height: 48px;
    text-align: center;
    font-size: .9rem;
    border: 1px solid #E8E8E8;
    border-radius: 40px;
    background: ${props => props.background || "none"};
    color: ${props => props.color || "#000"};
    font-family: inherit;
    font-weight: 600;
    margin-bottom: 1em;
    cursor: pointer;
    transition: background .3s ease-in-out, color .3s ease-in-out;

    &:hover {
        background-color: #0B8659;
        color: #fff;
    }
`

export {
    Wrapper,
    CareerButton,
    CareerContainer,
    CareerHeading
}
