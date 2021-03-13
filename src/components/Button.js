import React from 'react';
import PropTypes from 'prop-types';

const Button = React.forwardRef(({ title, ...rest }, ref) => {
  return (
    <button {...rest} ref={ref}>
      {title}
    </button>
  );
});

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

Button.displayName = 'Button';

export default Button;
