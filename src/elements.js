import styled from 'styled-components'

export const AppContainer=styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SearchButton = styled.button `
  background-color: #F6D045;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 700;
  padding: 10px;
  margin: 10px;
`
export const SearchBar = styled.input`
  width: 190px
  padding: 10px;
  margin: 10px 10px 0 0;

`
export const SearchBarContainer=styled.div`
  position: absolute;
  top: 22%;
  width: 100%;
  display:flex;
  justify-content: center;
`
export const CharacterBoard = styled.div`
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  width: 212px;
  background: white;
  max-height: 170px;
  overflow: scroll;
  position: absolute;
  ::-webkit-scrollbar {
    display: none;
  }
`
export const Character = styled.a`
  font-weight: 600;
  font-size: 0.9em;
  padding: 6px 9px;
  :hover{
    cursor: pointer;
    background: lightgrey;
  }
  display: block;
  text-decoration: none;
  color: black;
`
export const Title = styled.div`
  position: absolute;
  top: 10%;
  font-size: 2em;
  font-weight: bold;
`

export const MarvelImage = styled.img`
  position: absolute;
  max-width: 100%;
  bottom:0;
  z-Index: -1;
`
