import PropTypes from "prop-types";

const Bookmarks = ({ bookmarks, notification }) => {
  // Determine the background color based on the notification type
  const notificationBackground =
    notification.type === "add" ? "#006400" : "#FF7F00"; // Deep green or orange

  return (
    <div className="md:w-1/3">
      <h1 className="text-4xl">Bookmarked Blogs</h1>
      
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
  notification: PropTypes.shape({
    message: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
};

export default Bookmarks;
