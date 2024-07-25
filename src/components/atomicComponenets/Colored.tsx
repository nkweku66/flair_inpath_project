import { Colored } from "./components/styles/UniversalStyles"

interface Props {
    text?: string;
}

const Colored = ({text}: Props) => {
    return (
        <Colored>{text}</Colored>
    )
}
export { Colored }