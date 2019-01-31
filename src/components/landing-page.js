import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import Wrapper from './styled-components/Wrapper'


import LoginForm from './login-form';
// import Wrapper from './styled-components/Wrapper';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <Wrapper>
            <h2>Welcome to Foo App</h2>
            <LoginForm />
            <Link to="/register">Register</Link>
        </Wrapper>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
