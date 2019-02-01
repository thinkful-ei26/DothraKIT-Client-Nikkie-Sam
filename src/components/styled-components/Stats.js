import styled from "styled-components";
import {lightBeige} from './variables';

export default styled.p`
  text-align: center;
  margin: auto;
  background-color: ${props => (props.overall && lightBeige)};
  width: ${props => (props.overall && "75%")};
  margin-bottom: ${props => (props.overall && "20px")};
  padding: ${props => (props.overall && "20px 0px")};
`;