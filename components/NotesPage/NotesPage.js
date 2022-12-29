import styled from "styled-components";
import SingleWordHeading from "../SingleWordHeading/SingleWordHeading";
import Footer from "../Footer/Footer";

export default function NotesPage({ currentWord }) {
  return (
    <>
      <SingleWordHeading base={currentWord.base} query1={currentWord.query1} />
      <StyledNotes>
        <p>{currentWord.notes}</p>
      </StyledNotes>
      <Footer path={currentWord.category} />
    </>
  );
}

const StyledNotes = styled.section`
  padding: 0.625rem;
  margin: 0.625rem 0.75rem;
  background-color: white;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  color: black;
  height: auto;
  border: 1px solid darkmagenta;
  box-shadow: 4px 4px 4px 0.7px rgba(130, 8, 130, 0.43);
  position: relative;
  justify-content: center;
  align-items: center;
`;
