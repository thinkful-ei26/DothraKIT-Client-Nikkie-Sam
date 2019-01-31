import styled from "styled-components";
import {tan} from "./variables";

export default styled.section`
  margin: 0px auto;
  ${props => props.parent && `
    height: 100vh;
    background-color: black;
    padding: 20px 0px;
  `}
  ${props => props.welcome && `
    display:flex;
    border: 2px solid ${tan};
    padding: 10px;
    width: 95%;
    margin-bottom: 20px;
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