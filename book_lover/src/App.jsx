import { useState } from "react";
import "./App.css";
import Bookmarks from "./components/Bookmarks/Bookmark";
import Blogs from "./components/Header/Blogs/Blogs";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [notification, setNotification] = useState("");

  const handleAddToBookmark = (blog) => {
    const isAlreadyBookmarked = bookmarks.find((b) => b.id === blog.id);

    if (isAlreadyBookmarked) {
      // If the blog is already bookmarked, remove it
      setBookmarks(bookmarks.filter((b) => b.id !== blog.id));
      setNotification(`Removed from bookmarks: ${blog.title}`);
    } else {
      // Otherwise, add it to the bookmarks
      setBookmarks([...bookmarks, blog]);
      setNotification(`Added to bookmarks: ${blog.title}`);
    }

    // Automatically clear the notification after 3 seconds
    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  return (
    <>
      <Header />
      <div className="md:flex max-w-4xl mx-auto">
        <Blogs handleAddToBookmark={handleAddToBookmark} />
        <Bookmarks bookmarks={bookmarks} />
      </div>

      {/* Notification */}
      {notification && (
        <div className="notification fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white p-4 rounded-lg">
          {notification}
        </div>
      )}
    </>
  );
}

export default App;
