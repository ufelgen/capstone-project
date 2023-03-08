import Image from "next/image";
import { BiggerActionButton, BackButton, PopupForm } from "../StyledForm";

export default function SpecificationForm({ onFlashcardEntry, onClosePopup }) {
  return (
    <PopupForm onSubmit={(event) => onFlashcardEntry(event)}>
      <h4>do you wish to add a word or a phrase?</h4>
      <input
        type="radio"
        id="word"
        name="specification"
        value="word"
        required
      />
      <label htmlFor="word">word</label>
      <input
        type="radio"
        id="phrase"
        name="specification"
        value="phrase"
        required
      />
      <label htmlFor="phrase">phrase</label>
      <h4>which language was your search query?</h4>
      <input
        type="radio"
        id="english"
        name="language"
        value="english"
        required
      />
      <label htmlFor="english">
        <Image
          src="/flags/gb.svg"
          width={20}
          height={15}
          alt="great britain flag"
        />
      </label>
      <input
        type="radio"
        id="slovenian"
        name="language"
        value="slovenian"
        required
      />
      <label htmlFor="slovenian">
        <Image
          src="/flags/si.svg"
          width={20}
          height={15}
          alt="slovenian flag"
        />
      </label>
      <div>
        <BackButton onClick={onClosePopup}>back</BackButton>
        <BiggerActionButton type="submit">continue</BiggerActionButton>
      </div>
    </PopupForm>
  );
}
