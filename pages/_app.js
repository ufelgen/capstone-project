import GlobalStyles from "../components/GlobalStyles";
import { useState } from "react";
//import { words } from "../dummydata/words";

function MyApp({ Component, pageProps }) {
  // const [allWords, setAllWords] = useState(words);

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
