import { useState } from "react";
import "./App.css";
import Bookmarks from "./components/Bookmarks/Bookmark";
import Blogs from "./components/Header/Blogs/Blogs";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [notification, setNotification] = useState(""); // State for notification

  const handleAddToBookmark = (blog) => {
    const isAlreadyBookmarked = bookmarks.find((b) => b.id === blog.id);

    if (isAlreadyBookmarked) {
      // If the blog is already bookmarked, remove it
      setBookmarks(bookmarks.filter((b) => b.id !== blog.id));
      setNotification(`Removed "${blog.title}" from bookmarks.`);
    } else {
      // Otherwise, add it to the bookmarks
      setBookmarks([...bookmarks, blog]);
      setNotification(`Added "${blog.title}" to bookmarks.`);
    }

    // Clear the notification after 4 seconds (matching the CSS animation time)
    setTimeout(() => {
      setNotification("");
    }, 4000);
  };

  return (
    <>
      <Header />
      {/* Notification */}
      {notification && (
        <div className="notification">
          {notification}
        </div>
      )}
      <div className="md:flex max-w-4xl mx-auto">
        <Blogs handleAddToBookmark={handleAddToBookmark} />
        <Bookmarks bookmarks={bookmarks} notification={notification} />
      </div>
    </>
  );
}

export default App;
