import styled from "styled-components";

export default styled.section`
  margin: auto;
  ${props => props.parent && `
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: black;
  `}
  ${props => props.child && `
    margin: auto;
    width: 50%;
    border: 2px solid black;
    background-color: #e2c68e;
    padding: 30px 0px;
  `}
`;