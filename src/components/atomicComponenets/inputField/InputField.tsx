import * as S from "./InputField.module.styles"

interface InputProps {
    label?: string
    type?: string
    placeholder?: string
}

const InputField: React.FC<InputProps> = ({ label, type, placeholder }) => {
    return (
        <S.InputWrapper>
            <S.Label>{label}</S.Label>
            <S.Input type={type} placeholder={placeholder} />
        </S.InputWrapper>
    )
}

export default InputField