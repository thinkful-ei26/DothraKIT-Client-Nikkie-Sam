import styled from "styled-components";

export default styled.p`
  text-align: center;
  margin: auto;
  background-color: ${props => (props.overall && "white")};
  width: ${props => (props.overall && "75%")};
  margin-bottom: ${props => (props.overall && "20px")};
  padding: ${props => (props.overall && "20px 0px")};
`;