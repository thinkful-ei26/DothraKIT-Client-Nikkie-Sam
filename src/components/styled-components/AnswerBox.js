import styled from "styled-components";

export default styled.input`
  width: 100%;
  height: 80px;
  margin: auto;
  padding: 1em;
  background-color: #ffe5bc;
  box-sizing: border-box;
  text-align: center;
  border: 1px solid transparent;
  font-size: 25px;
  font-family: 'Montserrat', sans-serif;
  transition: .5s;
  ${props => !props.disabled && `
  &:hover, &:focus {
    outline: 0;
    border: 2px solid black;
  }
  `}
`;
