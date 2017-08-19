import React from 'react';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';

export default function FormattedPrice(props) {
  return (
    <FormattedNumber
      value={props.price}
      style="currency" // eslint-disable-line
      currency={props.currency}
      currencyDisplay="symbol"
      minimumFractionDigits={0}
    />
  );
}

FormattedPrice.propTypes = {
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
