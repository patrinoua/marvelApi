import React, { Component } from 'react';
import {AppContainer,
  SearchButton,
  SearchBar,
  SearchBarContainer,
  CharacterBoard,
  Character,
  Title,
  MarvelImage,
} from './elements'

const axios = require('axios');
const md5 = require('md5');


class App extends Component {

  constructor() {
    super();
    this.state = {
      value:"",
      characters:[]
    };
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange(event) {
    if(event.target.value.length>0){
      this.callMarvelApi(event.target.value)
    }else{
      this.setState({value:""})
    }
  }

  callMarvelApi(value){
    if(this.state.value !== value){
      axios.post('/marvelapi',{
        value: value,
      })
      .then(res => {
        let characterList=[]
        res.data.characters.forEach(character=>{
          characterList.push(character.name)
        })
        this.setState({ characters: characterList,
                        value: value
        })
      })
      .catch(err=>console.log(err))
    }
  }

  render() {
    let contentExists = this.state.value.length>0
    return (
      <AppContainer>
        <Title> Marvel Character Search </Title>
        <SearchBarContainer>
          <div>
            <SearchBar id="searchbar" type="text" name="search" placeholder="Search terms" onChange={this.handleChange} />
            { contentExists && <CharacterBoard>
              {this.state.characters.map(character=>{
                return <Character key={md5(character)} href={"https://www.google.de/search?q="+character} target='_blank'>{character}</Character>
              })}
            </CharacterBoard>}
          </div>
          <SearchButton onClick={this.callMarvelApi(this.state.value)}> SEARCH </SearchButton>
        </SearchBarContainer>
        <MarvelImage src='The_Marvel_Universe.gif'/>

      </AppContainer>
    );
  }
}
export default App;
