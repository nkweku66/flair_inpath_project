import * as S from "./Education.module.styles"
import InputField from "../../inputField/InputField"
import Button from "../../Button"

const Education = () => {
    return (
        <S.Form>
            <S.Heading>Add Education</S.Heading>
            <S.Wrapper>
                <InputField
                    label="Institution"
                    placeholder="Select institution" 
                />
                <InputField
                    label="Qualification"
                    type="text"
                />
                <InputField
                    label="Course Category"
                    type="text"
                />
                <InputField
                    label="Course of study"
                    type="text"
                />
                <InputField
                    label="Start date"
                    type="text"
                />
                <InputField
                    label="End date"
                    type="text"
                />
            </S.Wrapper>
            <Button
                text="Save"
                variant
            />
        </S.Form>
    )
}

export default Education