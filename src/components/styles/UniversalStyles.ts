import { Link } from 'react-router-dom';
import styled from 'styled-components'

interface Props {
    bold?: boolean;
}

const StyledButton = styled(Link)`
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

const ImageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 15px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
    margin-bottom: 24px;
`
const Logo = styled.img`
    width: 65px;
    height: 20px;
    margin: 0 auto;

`

const Colored = styled.span<Props>`
    font-weight: ${props => props.bold ? '700' : '400'};
    color: #0B8659;
`

const CircleWrapper = styled.div<{ size?: number }>`
    position: relative;
    display: inline-block;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
`;

const Circle = styled.svg<{ size?: number }>`
    transform: rotate(-90deg);
    overflow: visible;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
`;


export {
    StyledButton,
    ImageWrapper,
    Logo,
    Colored,
    CircleWrapper,
    Circle
}