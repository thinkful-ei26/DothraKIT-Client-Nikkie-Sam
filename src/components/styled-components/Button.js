import styled from "styled-components";
import {lightBeige} from './variables'

export default styled.button`
  background-color: black;
  border: none;
  color: ${lightBeige};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 30px;
  letter-spacing:4px;
  margin: auto;
  width: 100%;
  margin-top: 15px;
  cursor: pointer;
  font-family: 'Permanent Marker', cursive;
  transition: .5s;
  &:hover, &:focus{
    color: brown;
  }
  ${props => (props.next && `
    width: 75%;
  `)};

`;