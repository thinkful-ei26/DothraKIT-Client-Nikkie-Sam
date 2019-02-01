import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import { ThemeProvider } from "styled-components";
import Wrapper from "./styled-components/Wrapper";
import Table from "./styled-components/Table";
import Column from "./styled-components/Column";
import Cell from "./styled-components/Cell";
import HeaderText from "./styled-components/HeaderText";
import Link from './styled-components/Link';
import Logo from './styled-components/Logo';
import Nav from './styled-components/Nav';
import Option from './styled-components/Option'
import Paragraph from './styled-components/Paragraph';
import Strong from './styled-components/Strong';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import { all } from 'q';

export class Glossary extends React.Component {   
 
    componentDidMount() {
      console.log('THE WORDS ARE', this.props.allWords);
    }

    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }
    
    render() {
      const theme = {
        fontFamily: 'Montserrat',
      };

      let allDothrakiWords=[<Cell tableHead>Dothraki</Cell>];
      let allEnglishwords=[<Cell tableHead>English</Cell>];

      for(let i=0; i<this.props.allWords.length; i++){
        allDothrakiWords.push(<Cell>{this.props.allWords[i].dothraki}</Cell>);
        allEnglishwords.push(<Cell>{this.props.allWords[i].english}</Cell>);
      }
      
      return (
          <ThemeProvider theme={theme}>
          <Wrapper> 
            <Nav>
              <Link to="/dashboard"><Logo>DothraKIT</Logo></Link>
              <Link to="/glossary">Glossary</Link>
              <Option onClick={() => this.logOut()}>LogOut</Option>
            </Nav>  
            <Wrapper parent>
            <Wrapper glossary>
              <Table>
                  <HeaderText>Glossary</HeaderText>
                  <Wrapper words>
                    <Column dothraki>{allDothrakiWords}</Column>
                    <Column english>{allEnglishwords}</Column>
                  </Wrapper>
              </Table>
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
