import {CircleWrapper, Circle} from '../styles/UniversalStyles'


interface ProgressCircleProps {
    percentage: number; // Percentage of progress (0-100)
    size?: number;      // Size of the circle (diameter)
    strokeWidth?: number; 
}


const ProgressCircle: React.FC<ProgressCircleProps> = ({
    percentage,
    size = 100,
    strokeWidth = 10
}) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <CircleWrapper size={size}>
            <Circle width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="#6CB69B"
                    strokeWidth={strokeWidth}
                    fill="none"
                />
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="#0B8659"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    fill="none"
                    strokeLinecap="round"
                    style={{ transition: 'stroke-dashoffset 0.3s ease' }}
                />
                <text
                   x="30"
                   y="175"
                   text-anchor="middle"
                   font-size="12"
                   fill="#fff"
                   transform="rotate(90 100 100)" 
                >
                    {percentage}%
                </text>
            </Circle>
        </CircleWrapper>
    );
};

export default ProgressCircle;