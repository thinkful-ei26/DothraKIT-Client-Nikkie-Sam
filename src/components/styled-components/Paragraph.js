import styled from "styled-components";
import {forestGreen} from "./variables";

export default styled.p`
  margin-top: 0;
  ${props => props.rules || props.progress ? `
    display: inline;
    font-weight: bold;
    vertical-align: middle;
    display: inline-block;
    color: black;
    text-align: center;
    width: -webkit-fill-available;
  ` : undefined}
  ${props => props.progress && `
    color: ${forestGreen};
  `}
  ${props => props.blurb && `
    width: 75%;
    margin: auto;
    text-align: center;
  `}
`;