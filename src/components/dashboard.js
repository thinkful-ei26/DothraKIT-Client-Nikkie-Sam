import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import { ThemeProvider } from "styled-components";
import Button from "./styled-components/Button";
import Wrapper from "./styled-components/Wrapper";
import HeaderText from "./styled-components/HeaderText";
import AnswerBox from './styled-components/AnswerBox';
import DothrakiWord from './styled-components/DothrakiWord';
import Feedback from './styled-components/Feedback';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {fetchWord, guessWord, displayFeedback} from '../actions/word';


export class Dashboard extends React.Component {
    constructor(props){
        super(props)

        this.state={
            feedback:"",
            answer:"",
        }
    }
       
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
                totalTries: (this.props.word.data.totalTries +1),
                totalWrong: (this.props.word.data.totalWrong),
                next: this.props.word.data.next,
                mValue: this.props.word.data.mValue*2,
            }; 
            this.setState({feedback:"Correct!", answer: answer})
        }else {
            answer = {
                currentCorrect: false,
                totalCorrect: (this.props.word.data.totalCorrect),
                totalWrong: (this.props.word.data.totalWrong + 1),
                totalTries: (this.props.word.data.totalTries + 1),
                next: this.props.word.data.next,
                mValue: 1,
            }
            this.setState({feedback:"Incorrect!", answer: answer})

        }
        console.log('>>>>',answer)
        this.props.dispatch(guessWord(this.props.id, answer))        
      }

      handleNext(){
        this.answerInput.value = "";
        this.props.dispatch(displayFeedback(false));
        this.props.dispatch(fetchWord(this.props.id));
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
              {!this.props.displayFeedback && <Button onClick={() => this.guess()}>Guess</Button>}
              {this.props.displayFeedback && 
              <Feedback>
                <p>{this.state.feedback}</p>
                {this.state.feedback==="Incorrect!" && <p>The correct translation for    {this.props.word.data.dothraki} is: {this.props.word.data.english}</p> }
                <p>Your average score on this word is: {((parseInt(this.state.answer.totalCorrect))/(parseInt(this.state.answer.totalTries)))*100}% </p>
              </Feedback>
              }
              {this.props.displayFeedback && <Button onClick={() => this.handleNext()}>Next Word</Button>}
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
        loggedIn: state.auth.currentUser !== null,
        displayFeedback: state.word.displayFeedback,
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
