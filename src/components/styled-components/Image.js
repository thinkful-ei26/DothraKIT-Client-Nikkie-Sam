import styled from "styled-components";

export default styled.img`
  margin-top:10px;
  ${props => props.gif && `
    width: 85%;
  `}
  ${props => props.flipHoriz && `
    transform: scaleX(-1);
  `}
  ${props => props.sword && `
    width: 90px;
    height: 120px;
    position: relative;
    top: 70px;
    @media (max-width: 400px) {
      display:none;
    }
  `}
`;