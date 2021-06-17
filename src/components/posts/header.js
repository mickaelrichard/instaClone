import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { DEFAULT_IMAGE_PATH } from "../../constants/paths";

export default function Header({ username, fullName, profileUsername }) {
  return (
    <div className="flex h-4 p-4 py-8 border-b border-gray-primary">
      <div className="flex items-center">
        <Link to={`/p/${username}`} className="flex items-center">
          <img
            className="flex w-8 h-8 mr-3 rounded-full"
            alt={`${fullName} profile picture`}
            src={`/images/avatars/${username}.jpg`}
            onError={(e) => {
              e.target.src = DEFAULT_IMAGE_PATH;
            }}
          />
          <p className="font-bold">{username}</p>
        </Link>
      </div>
    </div>
  );
}

Header.propTypes = {
  username: PropTypes.string.isRequired,
};
