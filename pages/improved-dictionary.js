import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import ImprovedSearchForm from "../components/ImprovedSearchForm/ImprovedSearchForm";
import { fetchAllDictionaryData } from "../helpers/fetchDictionaryData";
import { Fragment } from "react";
import { nanoid } from "nanoid";
import { useState } from "react";

export default function ImprovedDictionary({
  onReturnFromEditMode,
  onSelectFlag,
  onToggleDropdown,
  onToggleDropdownTwo,
  selectedFlag,
  isDropdown,
  isDropdownTwo,
  onUpdateDictionaryResult,
}) {
  async function handleImprovedSearch(event) {
    event.preventDefault();
    const searchTerm = event.target.elements.searchTerm.value;
    const languageFrom = selectedFlag[0];
    const languageTo = selectedFlag[1];
    const searchParams = `${searchTerm}-${languageFrom}-${languageTo}`;
    const translation = await fetchAllDictionaryData(searchParams);
    onUpdateDictionaryResult(translation);
    event.target.reset();

    console.log("huhu testi");
    //onReturnFromEditMode();
  }
  return (
    <>
      <ImprovedSearchForm
        onSelectFlag={onSelectFlag}
        onToggleDropdown={onToggleDropdown}
        onToggleDropdownTwo={onToggleDropdownTwo}
        onImprovedSearch={handleImprovedSearch}
        selectedFlag={selectedFlag}
        isDropdown={isDropdown}
        isDropdownTwo={isDropdownTwo}
      />
      <Footer onReturnFromEditMode={onReturnFromEditMode} />
    </>
  );
}
