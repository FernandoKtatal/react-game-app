import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ className, alt, ...props }) => (
  <img
    className={`${className} img-fluid`}
    alt={alt}
    {...props}
  />
);

Image.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
};

Image.defaultProps = {
  className: '',
  alt: '',
};

export default Image;
