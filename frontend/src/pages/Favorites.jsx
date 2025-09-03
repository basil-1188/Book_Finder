import { useBookContext } from "../context/BookContext";
import Books from "../components/Books";
import '../css/favorites.css'

function BookFavorites() {
  const { favorites } = useBookContext();

  if (favorites.length > 0) {
    return (
      <div className="favorites">
        <h2>Your Favorite Books</h2>
        <div className="books-grid">
          {favorites.map((book) => (
            <Books book={book} key={book.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No Favorite Books Yet</h2>
      <p>Start adding books to your favorites and they will appear here!</p>
    </div>
  );
}

export default BookFavorites;
