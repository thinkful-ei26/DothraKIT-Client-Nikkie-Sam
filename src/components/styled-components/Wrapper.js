import styled from "styled-components";
import {tan, lightBeige} from "./variables";

export default styled.section`
  margin: 0px auto;
  ${props => props.parent && `
    min-height: 1000px;
    background-color: black;
    padding: 20px 0px;
  `}
  ${props => props.welcome && `
    display:flex;
    background: ${lightBeige};
    padding: 10px;
    width: 95%;
    margin: 20px auto 40px auto;
    @media (min-width: 850px) {
      width:50%;
    }
`}
  ${props => props.child && `
    width: 95%;
    border: 2px solid black;
    background-color: ${tan};
    padding: 30px 0px;
    @media (min-width: 850px) {
      width:50%;
    }
  `}

`;