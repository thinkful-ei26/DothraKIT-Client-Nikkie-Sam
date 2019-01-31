import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import RegistrationForm from './registration-form';
import Link from './styled-components/Link';
import HeaderText from './styled-components/HeaderText';
import Wrapper from './styled-components/Wrapper';


export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
<<<<<<< HEAD
       <Wrapper>
            <HeaderText>Register for DothraKIT</HeaderText>
=======
        <div className="home">
            <h2>Register for DothraKIT</h2>
>>>>>>> 140b15b7959e08ee30e9deebb948988dc1be90ce
            <RegistrationForm />
            <Link to="/">Already have an Account?</Link>
        </Wrapper>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
