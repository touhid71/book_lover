import { useState } from 'react';
import './App.css';
import Bookmarks from './components/Bookmarks/Bookmark';
import Blogs from './components/Header/Blogs/Blogs';
import Header from './components/Header/Header';

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  // Function to handle bookmark click
  const handleAddToBookmark = (blog) => {
    console.log(blog );
    setBookmarks([...bookmarks, blog]); // Optional: Update the bookmarks state
  };

  return (
    <>
      <Header />
      <div className="md:flex max-w-4xl mx-auto">
        <Blogs handleAddToBookmark={handleAddToBookmark} />
        <Bookmarks bookmarks= {bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
