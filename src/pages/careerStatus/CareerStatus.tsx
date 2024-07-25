import * as S from "./CareerStatus.styles"
import Button from "../../components/atomicComponenets/Button"
import Logo from "../../components/atomicComponenets/Logo"
import { useState } from "react"
import {careerStatus} from '../../assets/dataSource/data'

const CareerStatus = () => {

    const [selectedIndex, setselectedIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setselectedIndex(index);
    };

    const Careers = careerStatus.map((career) => {
        return (
            <S.CareerButton 
                key={career.Key}
                onClick={() => handleClick(career.Key)} 
                background={selectedIndex === career.Key ? "#0B8659" : ""}
                color={selectedIndex === career.Key ? "#fff" : ""}
            >
                {career.option}
            </S.CareerButton>
        )

    })

    return (
        <>
            <Logo />
            <S.Wrapper>
                <S.CareerContainer>
                    <S.CareerHeading>
                        Where are you currently in your professional career?
                    </S.CareerHeading>
                    {Careers}
                </S.CareerContainer>
                <Button text="Continue" />
            </S.Wrapper>
        </>
    )
}

export default CareerStatus;