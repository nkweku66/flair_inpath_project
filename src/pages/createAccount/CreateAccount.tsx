import * as S from "./CreateAccount.styles"
import Button from '../../components/atomicComponenets/Button'
import Logo from '../../components/atomicComponenets/Logo'
import { useState } from 'react';
import InputField from '../../components/atomicComponenets/inputField/InputField'


const CreateAccount = () => {
    const [phone, setPhone] = useState<string | undefined>(undefined);

    
    return (
        <>
            <Logo 
                children={<S.BackArrow></S.BackArrow>}
                text="Back"
            />
            <S.Form>
                <S.Heading>Get started.</S.Heading>
                <InputField
                    label="Fullname"
                    type="text" 
                />
                <S.InputsWrap>
                    <InputField
                        label="Date of Birth"
                        type="text" 
                    />
                    <S.Inputs>
                        <InputField
                            label="Gender"
                            type="text"
                            placeholder="Select one"
                        />
                        <S.DropIcon  src="../images/caret.png"/>
                    </S.Inputs>
                </S.InputsWrap>
                <InputField
                    label="Email address"
                    type="email"
                />
                <S.Inputs>
                    <S.Lable>Phone number</S.Lable>
                    <S.Phone
                        value={phone}
                        onChange={setPhone}
                    />
                </S.Inputs>
                <S.Inputs>
                    <InputField
                        label="Password"
                        type="password"
                    />
                    <S.PasswordIcon src="../images/eye.png"/>
                </S.Inputs>
                <S.SubmitButton to="/verification">
                    <Button
                        text="Create account"
                        path="/verification"
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