import styled from "styled-components";
import {tan, forestGreen} from "./variables";

export default styled.p`
  margin-top: 0;
  ${props => props.rules || props.progress ? `
    display: inline;
    vertical-align: middle;
    display: inline-block;
    color: ${tan};
    text-align: center;
    width: -webkit-fill-available;
  ` : undefined}
  ${props => props.progress && `
    color: ${forestGreen};
  `}
`;