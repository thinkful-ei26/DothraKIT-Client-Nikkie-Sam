import styled from "styled-components";
import {tan} from "./variables";

export default styled.a`
  padding: 20px;
  transition: 1s;
  margin: auto;
  &:hover{
    background-color:${tan};
    color: black; 
    cursor: pointer;
  }
`;