import styled from "styled-components";

export default styled.p`
  margin-top: 0;
  ${props => props.rules && `
    display: inline;
    vertical-align: middle;
    height: 100px;
    display: inline-block;
  `}
`;