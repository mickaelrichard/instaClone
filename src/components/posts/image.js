import PropTypes from "prop-types";

export default function Image({ src, caption }) {
  return <img src={src} alt={caption} width="670" height="838" />;
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};
