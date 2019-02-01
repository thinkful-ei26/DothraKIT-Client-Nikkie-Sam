import styled from "styled-components";

export default styled.div`
  font-size: 20px;
  padding: 20px;
  ${props => props.tableHead && `
    font-weight: bold;
    font-size: 25px;
    `}
`;