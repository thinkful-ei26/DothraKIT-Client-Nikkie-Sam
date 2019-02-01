import styled from "styled-components";
import {Link} from 'react-router-dom';
import {tan, lightBeige} from './variables';


export default styled(Link)`
  text-decoration: none;
  color: black;
  padding: 10px;
  transition: 1s;
  font-size: 12px;
  display: inline-block;
  &:hover, &:focus{
    color: ${lightBeige}; 
    cursor: pointer;
  }
  @media(min-width:420px){
    font-size: 15px;
    padding: 20px;
  }
`;