import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageAbout = () => {
  const { siteTitle, books, members } = useContext(AppContext);

  return (
    <div className="page_about">
      <h2>About</h2>
      <p>
        {siteTitle} would love you to become member #{members.length + 1} and
        make a suggestion for our book #{books.length + 1}.
      </p>
    </div>
  );
};
