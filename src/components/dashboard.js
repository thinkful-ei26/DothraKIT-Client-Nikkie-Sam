import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import { ThemeProvider } from "styled-components";
import Button from "./styled-components/Button";
import Wrapper from "./styled-components/Wrapper";
import HeaderText from "./styled-components/HeaderText";
import AnswerBox from './styled-components/AnswerBox';
import DothrakiWord from './styled-components/DothrakiWord';
import Nav from './styled-components/Nav';
import Option from './styled-components/Option'
import Feedback from './styled-components/Feedback';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {fetchWord, guessWord, displayFeedback} from '../actions/word';
import wrongGif from '../img/wrong.gif';
import correctGif from '../img/correct.gif'

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
        console.log(this.answerInput.value)
        this.props.dispatch(guessWord(this.props.id, this.answerInput.value))   
        //to refactor: when I dispatch guessWord, I'll be sending back just the user's answer and the word - no other data required. It should get a response back about whether it was true(correct) or false(incorrect), and depending on that change the feedback    
        //to refactor: fetchWord should just fetch the word in dothraki and english, no other data.
      }

      handleNext(){
        this.answerInput.value = "";
        this.props.dispatch(displayFeedback(false));
        this.props.dispatch(fetchWord(this.props.id));
      }
    
    render() {
        console.log('FEEDBACK IS', this.props.feedback);
        const theme = {
            font: "Calibri"
          };

        return (
            <ThemeProvider theme={theme}>
            <Wrapper> 
              <Nav>
                  <Option>DothraKIT</Option>
                  <Option>Progress</Option>
                  <Option onClick={() => this.logOut()}>LogOut</Option>
              </Nav>  
              <HeaderText>Welcome {this.props.name}</HeaderText>
              <DothrakiWord>{this.props.word.data.dothraki}</DothrakiWord>
              <AnswerBox ref={input => this.answerInput = input}  type='text'></AnswerBox>
              {!this.props.displayFeedback && <Button primary onClick={() => this.guess()}>Guess</Button>}
              {this.props.displayFeedback && 
              (<Feedback>
                <p>{this.props.feedback}</p>
                {this.props.feedback==="Incorrect!" && <p>The correct translation for    {this.props.word.data.dothraki} is: {this.props.word.data.english}</p> && <img src={wrongGif}></img> }
                {this.props.feedback==="Correct" && <img src={correctGif}></img>}
                <p>Your average score on this word is: {this.props.individualWordScore}% </p>
              </Feedback>)
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
        feedback: state.word.feedback,
        individualWordScore: state.word.individualWordScore
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
