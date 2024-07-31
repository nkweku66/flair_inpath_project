import styled from 'styled-components'



const Form = styled.form`
    width: 100%;
    padding: 24px 0 32px 0;
    position: absolute;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #818181;
`

const Wrapper = styled.section`
    width: 100%;
    padding: 16px 32px 8px 32px;
`

const Heading = styled.h3`
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1.5em;
`

export {
    Form,
    Wrapper,
    Heading
}