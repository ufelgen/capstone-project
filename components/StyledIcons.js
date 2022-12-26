import styled from "styled-components";

export function DeclensionIcon() {
  return <StyledIcon>D</StyledIcon>;
}

const StyledIcon = styled.div`
  height: 20px;
  width: 20px;
  background-color: lightgray;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5%;
  right: 5%;
`;
