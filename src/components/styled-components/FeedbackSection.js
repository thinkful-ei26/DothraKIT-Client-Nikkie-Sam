import styled from "styled-components";

export default styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 100%;
  background-color: ${props => (props.correct ? "#4caf50" : "brown")};
  padding-right: 10px;
  padding-left: 10px;
`;