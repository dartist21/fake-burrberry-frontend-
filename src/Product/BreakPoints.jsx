import React from 'react';
import Responsive from 'react-responsive';

export const MinDeviceWidthLarge = ({ children }) =>
  <Responsive minWidth={'62rem'}>
    {children}
  </Responsive>;
export const MaxDeviceWidthLarge = ({ children }) =>
  <Responsive maxWidth={'62rem'}>
    {children}
  </Responsive>;

export const MinDeviceWidthMedium = ({ children }) =>
  <Responsive minWidth={'48rem'}>
    {children}
  </Responsive>;
export const DeviceWidthMedium = ({ children }) =>
  <Responsive minWidth={'48rem'} maxWidth={'62rem'}>
    {children}
  </Responsive>;

export const MaxDeviceWidthSmall = ({ children }) =>
  <Responsive maxWidth={'48rem'}>
    {children}
  </Responsive>;
