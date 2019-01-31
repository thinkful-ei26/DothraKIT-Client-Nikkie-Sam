import styled from "styled-components";

export default styled.div`
  margin: 20px auto;
  width: 75%;
  background-color: ${props => (props.correct ? "#25633e" : "brown")};
  padding: 20px 0px;
  font-size: 20px;
`;