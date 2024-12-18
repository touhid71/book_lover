import PropTypes from "prop-types";

const Bookmarks = ({ bookmarks, notification }) => {
  // Determine the background color for notifications
  const notificationBackground =
    notification.type === "add" ? "#006400" : "#FF7F00"; // Deep green or orange

  return (
    <div className="md:w-1/3 ml-4 mt-11 pt-3">
      <div className="bg-gray-300 rounded-md pb-1 sticky top-0 z-10">
        <h1 className="text-lg pl-9 bg-gradient-to-r from-gray-600 to-green-600 text-white pt-1 pb-1 rounded-t-md">
          Bookmarked Blogs: {bookmarks.length}
        </h1>

        {/* Display Notification */}
        {notification.message && (
          <div
            className="notification p-4 rounded-lg my-4"
            style={{ backgroundColor: notificationBackground }}
          >
            {notification.message}
          </div>
        )}

        {/* Display List of Bookmarked Blogs */}
        <div className="m-2">
          {bookmarks.length > 0 ? (
            bookmarks.map((blog) => (
              <div
                key={blog.id}
                className={`p-2 mt-2 rounded-md ${
                  blog.isNew ? "bg-green-200" : "bg-slate-50"
                }`}
              >
                <h3>{blog.title}</h3>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No bookmarks available.</p>
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
    })
  ).isRequired,
  notification: PropTypes.shape({
    message: PropTypes.string,
    type: PropTypes.string,
    visible: PropTypes.bool,
  }).isRequired,
};

export default Bookmarks;
