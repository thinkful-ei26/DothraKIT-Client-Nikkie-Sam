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
    constructor(props){
        super(props)

        this.state = ({
            disabled: false,
        });
    }    
    componentDidMount() {
        console.log('the id is', this.props.id)
        this.props.dispatch(fetchWord(this.props.id));
    }

    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    guess(e){
        e.preventDefault();
        this.setState({disabled: true});
        console.log(this.answerInput.value);
        this.props.dispatch(guessWord(this.props.id, this.answerInput.value));
      }

      handleNext(){
        this.answerInput.value = "";
        this.setState({disabled: false});
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
              <form>
                <AnswerBox disabled={this.state.disabled} ref={input => this.answerInput = input} type='text'></AnswerBox>
                {!this.props.displayFeedback && <Button type="submit" primary onClick={(e) => this.guess(e)}>Guess</Button>}
              </form>
              {this.props.displayFeedback && 
              (<Feedback>
                {
                    this.props.feedback==="You're Wrong!" ?
                    <div>
                        <p>Yer ojila! {this.props.feedback}</p> 
                        <p>The correct translation for    {this.props.word.data.dothraki} is: {this.props.word.data.english}</p> 
                        <img src={wrongGif}></img>
                    </div> 
                    : ""
                }
                {
                    this.props.feedback==="Excellent!" ?
                    <div>
                        <p>Athdavrazar! {this.props.feedback}</p> 
                        <p>The correct translation for    {this.props.word.data.dothraki} is: {this.props.word.data.english}</p> 
                        <img src={correctGif}></img>
                    </div> 
                    : ""
                }
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
