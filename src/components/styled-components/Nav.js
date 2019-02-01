import styled from "styled-components";
import {darkRed} from "./variables";

export default styled.nav`
  font-family: ${props => props.theme.font};
  background-color: ${darkRed};
  color: black;
  position: fixed;
  width: 100%;
  z-index: 1000;
  border-bottom: 5px solid black;
`;