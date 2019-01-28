import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import { ThemeProvider } from "styled-components";
import Button from "./styled-components/Button";
import Wrapper from "./styled-components/Wrapper";
import HeaderText from "./styled-components/HeaderText";
import AnswerBox from './styled-components/AnswerBox';
import DothrakiWord from './styled-components/DothrakiWord';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {fetchWord} from '../actions/word';

export class Dashboard extends React.Component {
    
    componentDidMount() {
        this.props.dispatch(fetchWord(this.props.id));
    }

    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    guess() {

    }

    render() {

        const theme = {
            font: "Calibri"
          };


        return (
            <ThemeProvider theme={theme}>
            <Wrapper>
              <HeaderText>Welcome {this.props.name}</HeaderText>
              <Button primary onClick={() => this.logOut()}>Log Out</Button>
              <DothrakiWord>{this.props.word[1][0]}</DothrakiWord>
              <AnswerBox type='text'></AnswerBox>
              <Button  onClick={() => this.guess()}>Guess</Button>

            </Wrapper>
          </ThemeProvider>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    console.log(state)
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        word: state.auth.currentUser.words,
        id: state.auth.currentUser.id,
        loggedIn: state.auth.currentUser !== null
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
