import styled from "styled-components";

export default styled.input`
  width: 100%;
  height: 80px;
  margin: auto;
  padding: 1em;
  background: papayawhip;
  box-sizing: border-box;
  text-align: center;
  border: none;
  font-size: 25px;
  font-family: 'Montserrat', sans-serif;
  transition: .5s;
  &:hover, &:focus{
    outline: 0;
    border: 2px solid black;
  }
`;