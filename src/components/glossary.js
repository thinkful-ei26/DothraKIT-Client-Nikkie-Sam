import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import { ThemeProvider } from "styled-components";
import Navbar from './navbar';
import Wrapper from "./styled-components/Wrapper";
import Column from "./styled-components/Column";
import Cell from "./styled-components/Cell";
import HeaderText from "./styled-components/HeaderText";
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

export class Glossary extends React.Component {   
 
    componentDidMount() {
      // console.log('THE WORDS ARE', this.props.allWords);
    }
    
    render() {
      const theme = {
        fontFamily: 'Montserrat',
      };

      let allDothrakiWords=[<Cell key={this.props.allWords.length} tableHead>Dothraki</Cell>];
      let allEnglishwords=[<Cell key={this.props.allWords.length} tableHead>English</Cell>];

      for(let i=0; i<this.props.allWords.length; i++){
        allDothrakiWords.push(<Cell dothraki key={i}>{this.props.allWords[i].dothraki}</Cell>);
        allEnglishwords.push(<Cell key={i}>{this.props.allWords[i].english}</Cell>);
      }
      
      return (
          <ThemeProvider theme={theme}>
          <Wrapper> 
          <Navbar/> 
            <Wrapper parent>
            <Wrapper table>
                  <HeaderText>Glossary</HeaderText>
                  <Wrapper words>
                    <Column dothraki>{allDothrakiWords}</Column>
                    <Column english>{allEnglishwords}</Column>
                  </Wrapper>
            </Wrapper>
            </Wrapper>
          </Wrapper>
        </ThemeProvider>
      );
    }
}

const mapStateToProps = state => {
    return {
        firstName: state.auth.firstName,
        allWords: state.auth.currentUser.words,
        id: state.auth.currentUser.id,
        loggedIn: state.auth.currentUser !== null,
    };
};

export default requiresLogin()(connect(mapStateToProps)(Glossary));
