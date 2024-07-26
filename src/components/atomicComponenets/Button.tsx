import { StyledButton } from "../styles/UniversalStyles"

interface ButtonProps {
    text?: string;
    icon?: JSX.Element;
    path?: string;
    variant?: boolean;
    visible?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, icon, path, variant, visible }) => {
    return (
        <StyledButton to={path || "/"} variant={variant} visible={visible}>
            {text}
            {icon}
        </StyledButton>
    )
}

export default Button;