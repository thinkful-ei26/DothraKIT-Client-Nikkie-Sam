import styled from "styled-components";

export default styled.div`
  font-size: 20px;
  min-height: 75px;
  ${props => props.tableHead && `
    font-weight: bold;
    font-size: 25px;
    `}
  ${props => props.dothraki && `
    font-style: italic;
  `}
`;