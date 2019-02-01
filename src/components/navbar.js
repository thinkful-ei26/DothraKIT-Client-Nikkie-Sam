import React from 'react';
import {connect} from 'react-redux';
import Link from './styled-components/Link';
import Logo from './styled-components/Logo';
import Nav from './styled-components/Nav';
import Option from './styled-components/Option';
import Wrapper from './styled-components/Wrapper'
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

export class Navbar extends React.Component {   
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  };

    render() {

      return (
      <Nav>
          <Link to="/dashboard"><Logo>DothraKIT</Logo></Link>
          <Wrapper nav>
            <Link to="/glossary">Glossary</Link>
            <Option onClick={() => this.logOut()}>LogOut</Option>
          </Wrapper>
         
      </Nav>  
      );
    }
}


export default connect()(Navbar);
