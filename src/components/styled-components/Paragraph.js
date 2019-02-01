import styled from "styled-components";
import {forestGreen} from "./variables";

export default styled.p`
  margin-top: 0;
  ${props => props.blurb || props.progress ? `
    display: inline;
    vertical-align: middle;
    display: inline-block;
    color: black;
    text-align: center;
    margin: auto;
  ` : undefined}
  ${props => props.progress && `
    color: ${forestGreen};
  `}
`;