import PropTypes from "prop-types";

const Bookmarks = ({ bookmarks, notification }) => {
  return (
    <div className="md:w-1/3">
      <h1 className="text-4xl">Bookmarked Blogs</h1>
      
      {/* Display Notification */}
      {notification && (
        <div className="notification bg-blue-500 text-white p-4 rounded-lg my-4">
          {notification}
        </div>
      )}

      {/* Display List of Bookmarked Blogs */}
      <ul>
        {bookmarks.map((blog) => (
          <li key={blog.id} className="border-b-2 p-2">
            <h3>{blog.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  notification: PropTypes.string,
};

export default Bookmarks;
