import React from 'react';
import Responsive from 'react-responsive';

export const Large = ({ children }) =>
  (<Responsive minWidth={'62rem'}>
    {children}
  </Responsive>);
export const ToLarge = ({ children }) =>
  (<Responsive maxWidth={'62rem'}>
    {children}
  </Responsive>);
