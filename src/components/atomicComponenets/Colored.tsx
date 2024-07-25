import { Colored } from "../styles/UniversalStyles"

interface Props {
    text?: string;
    bold?: boolean;
}

const Color = ({text, bold}: Props) => {
    return (
        <Colored bold={bold}>{text}</Colored>
    )
}
export default Color;