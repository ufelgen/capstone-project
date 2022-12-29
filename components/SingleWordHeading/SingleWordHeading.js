import styled from "styled-components";

export default function SingleWordHeading({ base, query1 }) {
  return (
    <StyledHeadingWrapper>
      <h2>{base.flag}</h2>
      <h2>{query1.flag}</h2>
      <h2>{base.translation}</h2>
      <h2>
        {query1.translation} ({query1.gender})
      </h2>
    </StyledHeadingWrapper>
  );
}

const StyledHeadingWrapper = styled.section`
  margin: 0.625rem 0.625rem 1.25rem 0.625rem;
  background-color: White;
  color: darkmagenta;
  text-align: center;
  padding: 0.43rem;
  cursor: default;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
