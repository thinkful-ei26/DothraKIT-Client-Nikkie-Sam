import styled from "styled-components";
import {darkRed} from "./variables";

export default styled.nav`
  font-family: ${props => props.theme.font};
  display: flex;
  justify-content: space-around;
  background-color: ${darkRed};
  color: black;
`;