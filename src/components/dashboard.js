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
import {fetchWord, guessWord} from '../actions/word';


export class Dashboard extends React.Component {
       
    componentDidMount() {
        console.log('the id is', this.props.id)
        this.props.dispatch(fetchWord(this.props.id));
    }

    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    guess(){
        let answer = {}
        
        console.log(this.answerInput.value)
        if (this.answerInput.value === this.props.word.data.english){
            answer = {
                currentCorrect: true,
                totalCorrect: (this.props.word.data.totalCorrect +1),
                totalWrong: (this.props.word.data.totalWrong),
                next: null,
            }; 
        }else {
            answer = {
                currentCorrect: false,
                totalCorrect: (this.props.word.data.totalCorrect),
                totalWrong: (this.props.word.data.totalWrong + 1),
                next: null,
            }
        }
        console.log('>>>>',answer)
        this.props.dispatch(guessWord(this.props.id, answer))
        // this.props.dispatch(fet)
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
              <DothrakiWord>{this.props.word.data.dothraki}</DothrakiWord>
              <AnswerBox ref={input => this.answerInput = input}  type='text'></AnswerBox>
              <Button onClick={() => this.guess()}>Guess</Button>

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
        word: state.word,
        id: state.auth.currentUser.id,
        loggedIn: state.auth.currentUser !== null
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
