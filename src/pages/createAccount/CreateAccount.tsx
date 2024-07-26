import * as S from "./CreateAccount.styles"
import Button from '../../components/atomicComponenets/Button'
import Logo from '../../components/atomicComponenets/Logo'
// import PhoneInput from 'react-phone-number-input'
import { useState } from 'react';

const CreateAccount = () => {
    const [phone, setPhone] = useState<string | undefined>(undefined);

    
    return (
        <>
            <Logo 
                children={<S.BackArrow></S.BackArrow>}
            />
            <S.Form>
                <S.Heading>Get started.</S.Heading>
                <S.Inputs>
                    <S.Lable>Fullname</S.Lable>
                    <S.InputField type="text" />
                </S.Inputs>
                <S.Inputs>
                    <S.Lable>Date Of birth</S.Lable>
                    <S.InputField type="date"/>
                </S.Inputs>
                <S.Inputs>
                    <S.Lable>Gender</S.Lable>
                    <S.InputField type="gender" placeholder="Select one" />
                    <S.DropIcon></S.DropIcon>
                </S.Inputs>
                <S.Inputs>
                    <S.Lable>Email address</S.Lable>
                    <S.InputField type="email" />
                </S.Inputs>
                <S.Inputs>
                    <S.Lable>Phone number</S.Lable>
                    <S.Phone
                        value={phone}
                        onChange={setPhone}
                    />
                </S.Inputs>
                <S.Inputs>
                    <S.Lable>Password</S.Lable>
                    <S.InputField type="password"/>
                    <S.PasswordIcon></S.PasswordIcon>
                </S.Inputs>
                <S.SubmitButton to="/verification">
                    <Button
                        text="Create account"
                    />
                </S.SubmitButton>
                <S.SubText>Already signed up?
                    <S.Colored>Log in</S.Colored>
                </S.SubText>
            </S.Form>
        </>
    )
}

export default CreateAccount;