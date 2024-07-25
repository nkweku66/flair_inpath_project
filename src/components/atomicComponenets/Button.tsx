import { StyledButton } from "../styles/UniversalStyles"

interface ButtonProps {
    text?: string;
    icon?: JSX.Element;
    path?: string;
}

const Button: React.FC<ButtonProps> = ({ text, icon, path }) => {
    return (
        <StyledButton to={path}>
            {text}
            {icon}
        </StyledButton>
    )
}

export default Button;