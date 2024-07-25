import { StyledButton } from "../styles/UniversalStyles"

interface ButtonProps {
    text?: string;
    icon?: JSX.Element;
}

const Button: React.FC<ButtonProps> = ({ text, icon }) => {
    return (
        <StyledButton>
            {text}
            {icon}
        </StyledButton>
    )
}

export default Button;