import * as S from "../styles/UniversalStyles"

interface ButtonProps {
    text?: string;
    icon?: boolean;
    to?: string;
}

const Button:React.FC = (props: ButtonProps) => {
    return (
        <S.Button>
            {props.text}
            {props.icon}
        </S.Button>
    )
}

export default Button;