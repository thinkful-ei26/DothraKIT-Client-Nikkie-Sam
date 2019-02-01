import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import { ThemeProvider } from "styled-components";
import Link from './styled-components/Link';
import Logo from './styled-components/Logo';
// import {Button, Wrapper, HeaderText, AnswerBox, DothrakiWord, Nav, Option, Feedback, Form} from "./styled-components/index";
import Button from "./styled-components/Button";
import Wrapper from "./styled-components/Wrapper";
import HeaderText from "./styled-components/HeaderText";
import AnswerBox from './styled-components/AnswerBox';
import DothrakiWord from './styled-components/DothrakiWord';
import Nav from './styled-components/Nav';
import Option from './styled-components/Option'
import FeedbackSection from './styled-components/FeedbackSection';
import Form from './styled-components/Form';
import Feedback from './styled-components/Feedback';
import Image from './styled-components/Image';
import Paragraph from './styled-components/Paragraph';
import Stats from './styled-components/Stats';
import Strong from './styled-components/Strong';
import About from './styled-components/About'
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {fetchWord, guessWord, displayFeedback} from '../actions/word';
import {fetchOverallProgress} from '../actions/overallProgress';

import wrongGif from '../img/wrong.gif';
import correctGif from '../img/correct.gif'
import sword from '../img/red-sword.png';

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
        this.props.dispatch(fetchOverallProgress(this.props.id));
    }

    componentWillUnmount(){
        //if user tries to logout or leave this page while it's still on the feedback and they haven't clicked next, must click next for them: 
        if(this.state.disabled===true){
            this.handleNext();
        }
    }

    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    guess(e){
        e.preventDefault();
        this.setState({disabled: true});
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
            fontFamily: 'Montserrat',
          };

        let wrong = this.props.feedback==="You're Wrong!";
        let correct = this.props.feedback==="Excellent!";

        return (
            <ThemeProvider theme={theme}>
            <Wrapper> 
              <Nav>
                  <Link to="/dashboard"><Logo>DothraKIT</Logo></Link>
                  <Link to="/glossary">Glossary</Link>
                  <Option onClick={() => this.logOut()}>LogOut</Option>
              </Nav>  
              <Wrapper parent>
                <Wrapper welcome>
                    <Image sword src={sword}></Image>
                    <Wrapper>
                        <HeaderText>{this.props.firstName}</HeaderText>
                        <Paragraph rules>The rules are simple. Learn the word. Get it right. You live. Or else...well, best not to get on Khal's bad side</Paragraph>
                        <Paragraph progress>Your overall progress with the Dothraki language is: <Strong>{this.props.overallScore}% </Strong></Paragraph>
                    </Wrapper>
                    <Image sword flipHoriz src={sword}></Image>
                </Wrapper>
              <Wrapper child>
                
                <DothrakiWord>{this.props.word.data.dothraki}</DothrakiWord>
                <Form>
                    <AnswerBox primary placeholder="Guess here" disabled={this.state.disabled} ref={input => this.answerInput = input} type='text'></AnswerBox>
                    {!this.props.displayFeedback && <Button type="submit" onClick={(e) => this.guess(e)}>Submit</Button>}
                </Form>
                {this.props.displayFeedback && 
                (<FeedbackSection correct={correct} wrong={wrong}>
                    {
                        <Feedback>
                            {
                                wrong ? <Paragraph>Yer ojila! {this.props.feedback}</Paragraph> : <Paragraph>Athdavrazar! {this.props.feedback}</Paragraph> 
                            }
                            <Paragraph>The correct translation for    <Strong dothraki>{this.props.word.data.dothraki}</Strong> is: <Strong>{this.props.word.data.english}</Strong></Paragraph> 
                            <Stats>Your average score on this word is: <Strong>{this.props.individualWordScore}%</Strong> </Stats>
                            {
                                wrong ?  <Image gif src={wrongGif} alt="wrong gif"></Image> :  <Image gif src={correctGif} alt="correct gif"></Image>
                            }
                        </Feedback> 
                    }
                </FeedbackSection>)
                }
                {this.props.displayFeedback && <Button next onClick={() => this.handleNext()}>Next Word</Button>}
              </Wrapper>
            </Wrapper>
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
        firstName: currentUser.firstName,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        word: state.word,
        id: state.auth.currentUser.id,
        loggedIn: state.auth.currentUser !== null,
        displayFeedback: state.word.displayFeedback,
        feedback: state.word.feedback,
        individualWordScore: state.word.individualWordScore,
        overallScore: state.overallProgress.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
