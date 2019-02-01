import styled from "styled-components";
import {tan, lightBeige} from "./variables";

export default styled.a`
  transition: 1s;
  padding: 20px;
  display: inline-block;
  font-size: 12px;
  &:hover, &:focus{
    color: ${lightBeige}; 
    cursor: pointer;
  }
  @media(min-width:420px){
    font-size: 15px;
  }
`;