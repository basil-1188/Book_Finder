import React, { useState } from 'react'
import Books from '../components/Books'
import '../css/home.css'

export default function Home() {
  const [search, setSearch] = useState("")
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)

  const bookSearch = async (e) => {
    e.preventDefault()
    if (!search) return

    setLoading(true)

    try {
      const res = await fetch(`https://openlibrary.org/search.json?title=${search}`)
      const data = await res.json()

      const formattedBooks = data.docs.slice(0, 10).map((b, index) => ({
        id: index,
        title: b.title,
        author: b.author_name ? b.author_name.join(", ") : "Unknown",
        year: b.first_publish_year || "N/A",
        olKey: b.key || "",  
        cover: b.cover_i
            ? `https://covers.openlibrary.org/b/id/${b.cover_i}-M.jpg`
            : "https://via.placeholder.com/150x220?text=No+Cover"
        }))


      setBooks(formattedBooks)
    } catch (error) {
      console.error("Error fetching books:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='home'>
      <form onSubmit={bookSearch} className='search-book'>
        <input 
          type="text" 
          placeholder='Search Books' 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type='submit' className='search-btn' disabled={loading}>
          {loading ? "Loading..." : "Search"}
        </button>
      </form>
      <h2>ALEX, you can search the book here.....</h2>

      <div className="books-grid">
        {books.map(book => (
          <Books book={book} key={book.id} />
        ))}
      </div>
    </div>
  )
}
