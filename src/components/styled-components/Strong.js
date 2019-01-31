import styled from "styled-components";

export default styled.strong`
  font-weight: 600;
  font-style: ${props => (props.dothraki && "italic")};
`;