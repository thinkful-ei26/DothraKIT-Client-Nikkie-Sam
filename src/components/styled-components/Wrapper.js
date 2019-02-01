import styled from "styled-components";
import {tan, lightBeige, forestGreen, darkRed} from "./variables";

export default styled.section`
  margin: 0px auto;
  ${props => props.parent && `
    min-height: 1200px;
    background-color: black;
    padding: 20px 0px;
  `}

  ${props => props.parent && !props.landing && `
  padding-top: 100px;
`}

  ${props => props.welcome && !props.blurb && `
    display:flex;
  `}

  ${props => props.welcome && `
    background: ${lightBeige};
    padding: 10px;
    width: 95%;
    margin: 20px auto 40px auto;
    text-align: center;
    padding: 25px;
    @media (min-width: 850px) {
      width:50%;
    }
`}
  ${props => props.child && `
    width: 95%;
    border: 2px solid black;
    background-color: ${tan};
    padding: 30px 0px;
    margin-bottom: 30px;
    @media (min-width: 850px) {
      width:50%;
    }
  `}
  ${props => props.table && `
  width: 95%;
  border: 2px solid black;
  background-color: ${lightBeige};
  padding: 30px 15px;
  @media (min-width: 850px) {
    width:75%;
  }
`}

${props => props.words && `
  display:flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 20px;
`}

${props => props.login && `
  background: ${forestGreen};
`}

${props => props.register && `
  background: ${darkRed};
`}


${props => props.blurb && `
  padding: 25px;
  margin-bottom: 30px;
`}

${props => props.nav && `
  float: right;
  margin-top: 10px;
`}
`;