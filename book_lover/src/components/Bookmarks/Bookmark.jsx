import PropTypes from "prop-types";

const Bookmarks = ({ bookmarks, notification }) => {
  return (
    <div className="bookmarks-container">
      <div className="bookmarks-header">
        <h1 className="bookmarks-title">
          Bookmarked Blogs: {bookmarks.length}
        </h1>

        {/* Notification */}
        {notification && (
          <div className="notification">
            {notification}
          </div>
        )}

        {/* Display List of Bookmarked Blogs */}
        <div className="m-2">
          {bookmarks.length > 0 ? (
            bookmarks.map((blog) => (
              <div
                key={blog.id}
                className={`bookmark-item ${blog.isNew ? "bookmark-item-new" : ""}`}
              >
                <h3 className="bookmark-item-title">{blog.title}</h3>
                <p className="bookmark-item-meta">
                  (Reading Time: {blog.reading_time} min)
                </p>
              </div>
            ))
          ) : (
            <p className="bookmark-empty">No bookmarks available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isNew: PropTypes.bool, // Field to determine if the item is new
      reading_time: PropTypes.number,
    })
  ).isRequired,
  notification: PropTypes.string, // Prop for the notification message
};

export default Bookmarks;
