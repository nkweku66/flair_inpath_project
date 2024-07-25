import * as S from "./ProfilePage.styles"
import Logo from "../../components/atomicComponenets/Logo"
import { profileDetails } from "../../assets/dataSource/data"
import ProgressCircle from "../../components/atomicComponenets/ProgressCircle"

const ProfilePage = () => {

    const ProfileCard = profileDetails.map((profile) => {
        return (
                <S.ProfileCard>
                    <S.ProfileCardHeader>
                        <S.ProfileCardIcon src={profile.icon}/>
                        <S.ProfileHeading>{profile.heading}</S.ProfileHeading>
                        <S.CardLines></S.CardLines>
                        <S.CardVerticalLine></S.CardVerticalLine>
                    </S.ProfileCardHeader>
                    <S.ProfileText>{profile.details}</S.ProfileText>
                </S.ProfileCard>
        )
    })

    return (
        <>
            <Logo
                // children={<S.BackArrow></S.BackArrow>}
            />
            <S.Wrapper>
            <S.ProfileHeading>Set up your profile.</S.ProfileHeading>
                <S.ProfileGreenCard>
                    Profile Completion
                    <ProgressCircle percentage={0} size={60} strokeWidth={7} />
                </S.ProfileGreenCard>
                {ProfileCard}
                <S.ProfileBtnContainer>
                    <S.ProfileBtn>i'll do it later</S.ProfileBtn>
                    <S.ProfileBtn variant>Done</S.ProfileBtn>
                </S.ProfileBtnContainer>
            </S.Wrapper>    
        </>
    )
}

export default ProfilePage