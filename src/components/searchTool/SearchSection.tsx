import * as S from "./SearchSection.styles"

const SearchSection = () => {
    return (
        <S.SearchContainer>
            <S.SearchedAreaImageOne src="../images/chef_new.png" />
            <S.SearchedAreaImageTwo src="../images/school_guy.png" />
            <S.SearchedAreaImageThree src="../images/yellow_lady.png"/>
            <S.SearchedAreaImageFour src="../images/my_gee.png"/>
            <S.SearchedAreaImageFive src="../images/woman.png"/>
            <S.SearchedAreaImageSix src="../images/guy_g.png"/>
            <S.SearchedAreaImageSeven src="../images/afro_woman.png"/>
            <S.SearchedAreaImageEight src="../images/nice_lady.png"/>
            <S.SearchedAreaImageNine src="../images/background_lines.png"/>
            <S.SearchHeadingsWrapper>
                <S.SearchHeader>Discover a greater you.</S.SearchHeader>
                <S.SearchSubHeader>We help you <S.Highlight>find the perfect job.</S.Highlight></S.SearchSubHeader>
            </S.SearchHeadingsWrapper>
            <S.SearchArea>
                <S.SearchInputWrapper>
                    <S.SearchFinder src="../images/search.png" />
                    <S.SearchInput placeholder='Try "Civil Engineer"' first/>
                    <S.DropDown src='../images/drop-down.png' />
                    <S.SearchInput placeholder='jobs' jobField />
                    <S.SearchButton><S.SearchArrowIcon></S.SearchArrowIcon></S.SearchButton>
                </S.SearchInputWrapper>
            </S.SearchArea>
            {/* <S.SearchArea>
                <S.SearchInputWrapper>
                    <S.SearchInput placeholder='Try "Civil Engineer"'/>
                    <S.SearchFinder></S.SearchFinder>
                </S.SearchInputWrapper>
                <S.SearchInputWrapper variant>
                    <S.SearchInput placeholder="Jobs" jobField/>
                    <S.SearchDropdown></S.SearchDropdown>
                </S.SearchInputWrapper>
                <S.SearchButton><S.SearchArrowIcon></S.SearchArrowIcon></S.SearchButton>
            </S.SearchArea> */}
        </S.SearchContainer>
    )
}

export default SearchSection