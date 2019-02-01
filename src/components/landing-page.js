import React from 'react';
import {connect} from 'react-redux';
import { Redirect} from 'react-router-dom';
import Wrapper from './styled-components/Wrapper'

import LoginForm from './login-form';
import HeaderText from './styled-components/HeaderText';
import Paragraph from './styled-components/Paragraph';
import Link from './styled-components/Link';
import RegistrationForm from './registration-form';


export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <Wrapper parent>
            <Wrapper welcome blurb>
                <HeaderText>Welcome to DothraKIT</HeaderText>
                <Paragraph blurb>With the final season of GOT coming out it's time to brush up on your Dothraki phrases!</Paragraph>
                <Paragraph blurb>DothraKIT uses an advanced spaced repeitition algorithm to ensure you are learning efficiently.</Paragraph>
            </Wrapper>
            <Wrapper child>
                <HeaderText>Login</HeaderText>
                <LoginForm />
            </Wrapper>
            <Wrapper child>
                <HeaderText>Register</HeaderText>
                <RegistrationForm/>
            </Wrapper>
        </Wrapper>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
