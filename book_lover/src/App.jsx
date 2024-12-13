import { useState } from "react";
import "./App.css";
import Bookmarks from "./components/Bookmarks/Bookmark";
import Blogs from "./components/Header/Blogs/Blogs";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = (blog) => {
    const isAlreadyBookmarked = bookmarks.find((b) => b.id === blog.id);

    if (isAlreadyBookmarked) {
      // If the blog is already bookmarked, remove it
      setBookmarks(bookmarks.filter((b) => b.id !== blog.id));
    } else {
      // Otherwise, add it to the bookmarks
      setBookmarks([...bookmarks, blog]);
    }
  };

  return (
    <>
      <Header />
      <div className="md:flex max-w-4xl mx-auto">
        <Blogs handleAddToBookmark={handleAddToBookmark} />
        <Bookmarks bookmarks={bookmarks} />
      </div>
    </>
  );
}

export default App;
