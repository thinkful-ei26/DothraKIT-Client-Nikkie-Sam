import styled from "styled-components";

export default styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 75%;
  background-color: ${props => (props.correct ? "#4caf50" : "brown")};
`;