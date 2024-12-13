import PropTypes from "prop-types";
import { GoBookmark } from "react-icons/go";

const Blog = ({ blog, handleAddToBookmark }) => {
  const { title, cover, author, author_img, reading_time, posted_date, hash_tag } = blog;

  return (
    <div className="mb-6 p-4 border rounded-lg shadow-sm">
      {/* Cover Image */}
      <img className="w-full rounded-lg mb-4" src={cover} alt={`Cover for ${title}`} />

      {/* Author and Reading Info */}
      <div className="flex justify-between items-center mb-4">
        {/* Author Info */}
        <div className="flex items-center">
          <img className="w-14 h-14 rounded-full" src={author_img} alt={`Author ${author}`} />
          <div className="ml-4">
            <h3 className="text-xl font-semibold">{author}</h3>
            <p className="text-sm text-gray-500">{posted_date}</p>
          </div>
        </div>

        {/* Reading Time and Bookmark */}
        <div className="text-right">
          <span className="text-gray-600">{reading_time} Min Read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="ml-3 text-xl text-blue-500 hover:text-blue-700"
            aria-label="Add to bookmarks"
          >
            <GoBookmark />
          </button>
        </div>
      </div>

      {/* Blog Title */}
      <h2 className="text-3xl font-bold mb-4">{title}</h2>

      {/* Hashtags */}
      <p className="text-blue-500">
        {hash_tag &&
          hash_tag.map((hash, i) => (
            <span key={i} className="mr-2">
              <a href="#" className="hover:underline">
                #{hash}
              </a>
            </span>
          ))}
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    author_img: PropTypes.string.isRequired,
    reading_time: PropTypes.number.isRequired,
    posted_date: PropTypes.string.isRequired,
    hash_tag: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
};

export default Blog;
