import React from 'react';
import Responsive from 'react-responsive';
import PropTypes from 'prop-types';

export const Large = ({ children }) =>
  (<Responsive minWidth={'62rem'}>
    {children}
  </Responsive>);
export const ToLarge = ({ children }) =>
  (<Responsive maxWidth={'62rem'}>
    {children}
  </Responsive>);

Large.propTypes = {
  children: PropTypes.node.isRequired,
};

ToLarge.propTypes = {
  children: PropTypes.node.isRequired,
};
