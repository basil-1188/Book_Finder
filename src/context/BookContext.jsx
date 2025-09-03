import { createContext, useState, useContext, useEffect } from "react";

const BookContext = createContext();

export const useBookContext = () => useContext(BookContext);

export const BookProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("bookFavorites");
    if (storedFavs) setFavorites(JSON.parse(storedFavs));
  }, []);

  useEffect(() => {
    localStorage.setItem("bookFavorites", JSON.stringify(favorites));
  }, [favorites]);

const addToFavorites = (book) => {
    if (!favorites.some((b) => b.id === book.id)) {
      setFavorites((prev) => [...prev, book]);
    }
  };

  const removeFromFavorites = (bookId) => {
    setFavorites((prev) => prev.filter((b) => b.id !== bookId));
  };

  const isFavorite = (bookId) => {
    return favorites.some((b) => b.id === bookId);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return <BookContext.Provider 
  value={value}>{children}
  </BookContext.Provider>;
};
