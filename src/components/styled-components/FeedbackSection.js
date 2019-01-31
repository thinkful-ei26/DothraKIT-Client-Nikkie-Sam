import styled from "styled-components";
import {darkRed} from "./variables";

export default styled.div`
  margin: 20px auto;
  width: 75%;
  background-color: ${props => (props.correct ? "#25633e" : `${darkRed}`)};
  padding: 20px 0px;
  font-size: 20px;
`;