import styled from "styled-components";

export default function ConjugationButtons({ onChangeTense }) {
  return (
    <div>
      <button type="button" onClick={() => onChangeTense("past")}>
        past
      </button>
      <button type="button" onClick={() => onChangeTense("present")}>
        present
      </button>
      <button type="button" onClick={() => onChangeTense("future")}>
        future
      </button>
    </div>
  );
}
