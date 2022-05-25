import "./App.scss";
import { PageWelcome } from "./components/PageWelcome";
import { PageBooks } from "./components/PageBooks";
import { PageMembers } from "./components/PageMembers";
import { PageAbout } from "./components/PageAbout";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./AppContext";

function App() {
  const { siteTitle } = useContext(AppContext);
  return (
    <div className="App">
      <div className="title">
        <img src="images/icon.png" alt="logo" />
        <h1>{siteTitle}</h1>
      </div>
      <hr />
      <NavLink to="/welcome">Welcome</NavLink> |{" "}
      <NavLink to="/books">Books</NavLink> |{" "}
      <NavLink to="/members">Members</NavLink> |{" "}
      <NavLink to="/about">About</NavLink>
      <hr />
      <Routes>
        <Route path="/welcome" element={<PageWelcome />} />
        <Route path="/books" element={<PageBooks />} />
        <Route path="/members" element={<PageMembers />} />
        <Route path="/about" element={<PageAbout />} />
        <Route path="/" element={<Navigate to="/welcome" replace />} />
      </Routes>
    </div>
  );
}

export default App;
