import * as S from "./ProfilePage.styles"
import Logo from "../../components/atomicComponenets/Logo"
import { profileDetails } from "../../assets/dataSource/data"
import ProgressCircle from "../../components/atomicComponenets/ProgressCircle"
import { useState } from "react"


const ProfilePage = () => {
    const [selectedIndex, setselectedIndex] = useState<number | null>(null);

    const handleClicks = (index: number) => {
        setselectedIndex(prevIndex => (prevIndex == index ? null : index));

    };


    const ProfileCard = profileDetails.map((profile) => {
        return (
                <S.ProfileCard>
                    <S.ProfileCardHeader>
                        <S.ProfileCardIcon src={profile.icon}/>
                        <S.ProfileHeading>{profile.heading}</S.ProfileHeading>
                        <S.AddAccordion
                         onClick={() => handleClicks(profile.key)}
                        >
                            <S.CardLines selected={selectedIndex === profile.key} openClose={selectedIndex === profile.key}></S.CardLines>
                            <S.CardVerticalLine selected={selectedIndex === profile.key}></S.CardVerticalLine>
                        </S.AddAccordion>
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
                <S.ProfileGreenCard>
                        Profile Completion
                        <ProgressCircle percentage={0} size={60} strokeWidth={7} />
                        <S.ProfileAsideDetails>
                            <S.ProfileHeading variant2>Education</S.ProfileHeading>
                            <S.ProfileHeading variant2>Work Experience</S.ProfileHeading>
                            <S.ProfileHeading variant2>Interests & Skills</S.ProfileHeading>
                            <S.ProfileHeading variant2>Certifications</S.ProfileHeading>
                            <S.ProfileHeading variant2>Accomplishments</S.ProfileHeading>
                            <S.ProfileHeading variant2>Upload Resume</S.ProfileHeading>
                        </S.ProfileAsideDetails>
                </S.ProfileGreenCard>
                <S.ProfileForm>
                    <S.ProfileHeading variant>Set up your profile.</S.ProfileHeading>
                    {/* <S.ProfileGreenCard>
                        Profile Completion
                        <ProgressCircle percentage={0} size={60} strokeWidth={7} />
                    </S.ProfileGreenCard> */}
                    {ProfileCard}
                    <S.ProfileBtnContainer>
                        <S.ProfileBtn>i'll do it later</S.ProfileBtn>
                        <S.ProfileBtn variant>Done</S.ProfileBtn>
                    </S.ProfileBtnContainer>
                </S.ProfileForm>
            </S.Wrapper>    
        </>
    )
}

export default ProfilePage