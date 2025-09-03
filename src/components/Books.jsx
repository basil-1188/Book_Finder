import React from "react";
import "../css/books.css";
import { useBookContext } from "../context/BookContext";

export default function Books({ book }) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useBookContext();
  const favorite = isFavorite(book.id);

  const FavBook = (e) => {
    e.stopPropagation(); 
    if (favorite) removeFromFavorites(book.id);
    else addToFavorites(book);
  };

  return (
    <div className="book-card-wrapper">
      <a
        href={book.olKey ? `https://openlibrary.org${book.olKey}` : "#"}
        target="_blank"
        rel="noreferrer"
        className="book-card"
      >
        <div className="book-cover">
          <img src={book.cover} alt={book.title} />
        </div>

        <div className="book-info">
          <p>{book.title}</p>
          <p>{book.author}</p>
          <p>{book.year}</p>
        </div>
      </a>

      <button className="fav-button" onClick={FavBook}>
        {favorite ? "💖" : "🤍"}
      </button>
    </div>
  );
}
