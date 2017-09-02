import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import arrow from '../assets/img/arrow.svg';

const CountrySelectorStyled = styled.select`
  position: absolute;
  left: 0;
  width: 100%;
  opacity: 0;
  cursor: pointer;
`;

const Img = styled.img`
  width: 14px;
  margin-left: 0.5rem;
`;

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1.34;
  color: #999999;
  background: transparent;
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
      <Wrapper>
        Shopping in:&nbsp;{this.props.countries[this.state.selectedCountry]}
        <CountrySelectorStyled onChange={this.handleSelectCountry}>
          {this.props.countries.map(country =>
            (<option key={country}>
              {country}
            </option>),
          )}
        </CountrySelectorStyled>
        <Img src={arrow} alt="" />
      </Wrapper>
    );
  }
}

//  <Wrapper>
//  Shopping in:&nbsp;{locales[this.state.valueIndex]}
//  <Country value={locales[this.state.valueIndex]} onChange={this.handleChange}>
//    {locales.map(locale => (
//      <option
//        value={locale}
//      >
//        {locale}
//      </option>
//    ))}
//  </Country>
//  <Img src={arrow} alt="" />
// </Wrapper>

CountrySelector.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CountrySelector;
