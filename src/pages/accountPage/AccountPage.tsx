import * as S from "./AccountPage.styles"
import {useState} from 'react'
import data from "../../assets/dataSource/data"
import GlobalStyles from "../../App.styles"

const AccountPage = () => {
    const [selectCardIndex, setSelectCardIndex] = useState<number | null>(null);

    const handleCardClick = (index: number) => {
        setSelectCardIndex(index);
    }

    const Cards = data.map(card => {

        return (
           
           <S.Card 
                key={card.index}
                onClick={() => handleCardClick(card.index)} 
                selected={card.index === selectCardIndex}
            >
                {card.isTrue && (
                    <S.Text comingSoon>{card.comingSoon}</S.Text>
                )}
                <S.CardImage 
                    src={card.imageSrc} 
                    width={card.imageWidth}
                    alt="candidate"
                />
                <S.Text>{card.cardTitle}</S.Text>
                <S.Text textColor>{card.cardInfo}</S.Text>
            </S.Card>
        )

    })
    return (
        <>
            <GlobalStyles />
            <S.ImageWrapper>
                <S.Logo src="../images/logo.png"/>
            </S.ImageWrapper>  
            <S.AccountWrapper>
                <S.Heading>What type of account are you setting up?</S.Heading>
                <S.CardsWrapper>
                    {Cards}
                </S.CardsWrapper>
                <S.Button to="/create" selected={selectCardIndex !== null}>
                    Next
                    <S.ButtonArrow></S.ButtonArrow>
                </S.Button>
            </S.AccountWrapper>
        </>
    )
}

export default AccountPage;