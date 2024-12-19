import React, { useEffect, useState } from "react";
import Blog from "../../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleAddToBookmark }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <h1 className="text-lg mb-6"></h1>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleAddToBookmark={handleAddToBookmark} // Pass the function here
        />
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookmark: PropTypes.func.isRequired,
};

export default Blogs;
