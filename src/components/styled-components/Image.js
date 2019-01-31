import styled from "styled-components";

export default styled.img`
  margin-top:10px;
  ${props => props.flipHoriz && `
    transform: scaleX(-1);
  `}
  ${props => props.sword && `
    width: 70px;
    height: 100px;
  `}
`;