import React from 'react';
import Responsive from 'react-responsive';
import PropTypes from 'prop-types';

export const Large = ({ children }) =>
  (<Responsive minWidth={992}>
    {children}
  </Responsive>);
export const ToLarge = ({ children }) =>
  (<Responsive maxWidth={991}>
    {children}
  </Responsive>);

export const ToMedium = ({ children }) =>
  (<Responsive maxWidth={767}>
    {children}
  </Responsive>);

export const Medium = ({ children }) =>
  (<Responsive minWidth={768}>
    {children}
  </Responsive>);

Large.propTypes = {
  children: PropTypes.node.isRequired,
};

ToLarge.propTypes = {
  children: PropTypes.node.isRequired,
};

ToMedium.propTypes = {
  children: PropTypes.node.isRequired,
};

Medium.propTypes = {
  children: PropTypes.node.isRequired,
};
