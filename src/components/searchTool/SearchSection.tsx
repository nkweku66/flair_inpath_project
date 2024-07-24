import * as S from "./SearchSection.styles"

const SearchSection = () => {
    return (
        <S.SearchContainer>
            <S.SearchAreaImage src="./src/assets/images/chef.png" />
            {/* <S.SearchAreaImage src="./src/assets/images/guy.png"  variant2 position/> */}
            <S.SearchHeadingsWrapper>
                <S.SearchHeader>Discover a greater you.</S.SearchHeader>
                <S.SearchSubHeader>We help you <S.Highlight>find the perfect job</S.Highlight></S.SearchSubHeader>
            </S.SearchHeadingsWrapper>
            <S.SearchAreaImage src="./src/assets/images/uniguy.png" variant1/>
            <S.SearchArea>
                <S.SearchInputWrapper>
                    <S.SearchInput placeholder='Try "Civil Engineer"'/>
                    <S.SearchFinder></S.SearchFinder>
                </S.SearchInputWrapper>
                <S.SearchInputWrapper>
                    <S.SearchInput placeholder="Jobs" jobField/>
                    <S.SearchDropdown></S.SearchDropdown>
                </S.SearchInputWrapper>
                <S.SearchButton><S.SearchArrowIcon></S.SearchArrowIcon></S.SearchButton>
            </S.SearchArea>
            <S.SearchAreaImage src="./src/assets/images/guy.png" variant2/>
        </S.SearchContainer>
    )
}

export default SearchSection