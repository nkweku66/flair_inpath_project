import {Arrow} from "../styles/UniversalStyles"

interface ArrowProps{
    arrow?: JSX.Element;
    text?: string;
}


const BackArrow: React.FC<ArrowProps> = ({arrow, text}) => {
    return (
        <Arrow>
            {arrow}
            {text}
        </Arrow>
    )
}
export default BackArrow;