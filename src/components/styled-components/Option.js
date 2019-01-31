import styled from "styled-components";

export default styled.a`
  font-family: ${props => (props.appTitle && "'Permanent Marker', cursive")};
  font-size: ${props => (props.appTitle && "25px")};
  letter-spacing: ${props => (props.appTitle && "4px")};
  padding: 20px;
  transition: 1s;
  margin: auto;
  &:hover{
    background-color:#e2c68e;
    color: black; 
    cursor: pointer;
  }
`;