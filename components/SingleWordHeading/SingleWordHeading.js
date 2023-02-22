import styled from "styled-components";
import Image from "next/image";

export default function SingleWordHeading({ base, query1 }) {
  return (
    <StyledHeadingWrapper>
      <h2>
        <Image
          src={`/flags/${base.flag}.svg`}
          width={28}
          height={21}
          alt={`${base.language} flag`}
        />
      </h2>
      <h2>
        <Image
          src={`/flags/${query1.flag}.svg`}
          width={28}
          height={21}
          alt={`${query1.language} flag`}
        />
      </h2>
      <h2>{base.translation}</h2>
      <h2>
        {query1.translation} {query1.gender && `(${query1.gender})`}
      </h2>
    </StyledHeadingWrapper>
  );
}

const StyledHeadingWrapper = styled.section`
  margin: 0.625rem 0.625rem 1.25rem 0.625rem;
  background-color: var(--white);
  color: var(--darkmagenta);
  text-align: center;
  padding: 0.43rem;
  cursor: default;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
