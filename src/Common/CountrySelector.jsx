import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import arrow from '../assets/img/arrow.svg';

const CountrySelectorStyled = styled.select`
  display: block;
  vertical-align: middle;
  position: relative;
  padding: 0;
  padding-right: 1.25rem;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1.34;
  color: #999999;
  background: transparent;
  border: none;
  appearance: none;
  &:after {
    content: "";
    top: 25%;
    position: absolute;
    right: 0;
    width: 12px;
    height: 6px;
    background: url(${arrow}) no-repeat;
    background-size: contain;
  }
`;

class CountrySelector extends Component {
  state = {
    selectedCountry: 0,
  };

  handleSelectCountry = (event) => {
    this.setState({ selectedCountry: event.target.selectedIndex });
  };

  render() {
    return (
      <div>
        <CountrySelectorStyled onChange={this.handleSelectCountry}>
          {this.props.countries.map(country =>
            (<option key={country}>
              Shopping in: {country}
            </option>),
          )}
        </CountrySelectorStyled>
      </div>
    );
  }
}

CountrySelector.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CountrySelector;
