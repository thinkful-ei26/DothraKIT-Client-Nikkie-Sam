import styled from "styled-components";
import {tan} from "./variables";

export default styled.a`
  font-family: ${props => (props.appTitle && "'Permanent Marker', cursive")};
  font-size: ${props => (props.appTitle && "25px")};
  letter-spacing: ${props => (props.appTitle && "4px")};
  padding: 20px;
  transition: 1s;
  margin: auto;
  &:hover{
    background-color:${tan};
    color: black; 
    cursor: pointer;
  }
`;