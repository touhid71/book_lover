import { useState } from "react";
import "./App.css";
import Bookmarks from "./components/Bookmarks/Bookmark";
import Blogs from "./components/Header/Blogs/Blogs";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [notification, setNotification] = useState(null); // State for notification

  const handleAddToBookmark = (blog) => {
    const isAlreadyBookmarked = bookmarks.find((b) => b.id === blog.id);

    if (isAlreadyBookmarked) {
      // If the blog is already bookmarked, remove it
      setBookmarks(bookmarks.filter((b) => b.id !== blog.id));
      setNotification({
        message: `Removed from bookmarks.`,
        type: 'remove', // Set 'remove' type
      });
    } else {
      // Otherwise, add it to the bookmarks
      setBookmarks([...bookmarks, blog]);
      setNotification({
        message: `Added to bookmarks.`,
        type: 'add', // Set 'add' type
      });
    }

    // Clear the notification after 3 seconds
    setTimeout(() => {
      setNotification(null); // Clear notification when done
    }, 3000);
  };

  return (
    <>
      <Header />
      {/* Notification */}
      {notification && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
      <div className="md:flex max-w-4xl mx-auto">
        <Blogs handleAddToBookmark={handleAddToBookmark} />
        <Bookmarks bookmarks={bookmarks} />
      </div>
    </>
  );
}

export default App;
