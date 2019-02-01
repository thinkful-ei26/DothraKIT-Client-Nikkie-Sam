import styled from "styled-components";
import {Link} from 'react-router-dom';
import {tan} from './variables';


export default styled(Link)`
  text-decoration: none;
  color: black;
  padding: 20px;
  transition: 1s;
  margin: auto;
  &:hover{
    background-color:${tan};
    color: black; 
    cursor: pointer;
  }
`;