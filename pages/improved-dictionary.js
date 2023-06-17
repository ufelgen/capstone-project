import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import ImprovedSearchForm from "../components/ImprovedSearchForm/ImprovedSearchForm";
import fetchDictionaryData from "../helpers/fetchDictionaryData";
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
}) {
  function handleImprovedSearch() {}
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
