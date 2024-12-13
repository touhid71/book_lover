import { useState } from "react";
import "./App.css";
import Bookmarks from "./components/Bookmarks/Bookmark";
import Blogs from "./components/Header/Blogs/Blogs";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [notification, setNotification] = useState({ message: "", type: "" });

  const handleAddToBookmark = (blog) => {
    const isAlreadyBookmarked = bookmarks.find((b) => b.id === blog.id);

    if (isAlreadyBookmarked) {
      // If the blog is already bookmarked, remove it
      setBookmarks(bookmarks.filter((b) => b.id !== blog.id));
      setNotification({
        message: `Removed from bookmarks: ${blog.title}`,
        type: "remove", // Type for the background color (orange)
      });
    } else {
      // Otherwise, add it to the bookmarks
      setBookmarks([...bookmarks, blog]);
      setNotification({
        message: `Added to bookmarks: ${blog.title}`,
        type: "add", // Type for the background color (deep green)
      });
    }

    // Automatically clear the notification after 3 seconds
    setTimeout(() => {
      setNotification({ message: "", type: "" });
    }, 3000);
  };

  return (
    <>
      <Header />
      <div className="md:flex max-w-4xl mx-auto">
        <Blogs handleAddToBookmark={handleAddToBookmark} />
        <Bookmarks bookmarks={bookmarks} notification={notification} />
      </div>
    </>
  );
}

export default App;
