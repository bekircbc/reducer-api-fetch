import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

const bookUrl = "https://apis-for-beginner.bscebeci.de/api/books";
const memberUrl = "https://apis-for-beginner.bscebeci.de/api/employees";

export const AppProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [members, setMembers] = useState([]);
  const siteTitle = "The Online Book Club";

  useEffect(() => {
    (async () => {
      setBooks((await axios.get(bookUrl)).data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setMembers((await axios.get(memberUrl)).data);
    })();
  }, []);

  const handleDelete = (book) => {
    const _books = books.filter((m) => m.id !== book.id);
    setBooks(_books);
  };

  const handleEdit = (book) => {
    book.title = book.title + " - FINISHED";
    setBooks([...books]);
  };

  return (
    <AppContext.Provider
      value={{
        siteTitle,
        books,
        setBooks,
        members,
        handleDelete,
        handleEdit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
