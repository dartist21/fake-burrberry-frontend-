import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SelectStyled = styled.div`
  display: inline-block;
  margin: 0;
  margin-bottom: 1rem;
  padding: 0;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.34;
  text-decoration: none;
  color: #999999;
  background-color: transparent;
  @media only screen and (min-width: 48rem) {
    margin-right: 1.5rem;
  }
`;

const Value = styled.select`
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.34;
  color: #171717;
  background-color: transparent;
  border: none;
  appearance: none;
  cursor: pointer;
`;

export default class Select extends Component {
  state = {
    valueIndex: 0,
  };

  handleChange = (event) => {
    this.setState({ valueIndex: event.target.selectedIndex });
  };

  render() {
    return (
      <SelectStyled>
        {this.props.title}:&nbsp;
        <Value value={this.props.values[this.state.valueIndex]} onChange={this.handleChange}>
          {this.props.values.map(value =>
            (<option key={value} value={value}>
              {value}
            </option>),
          )}
        </Value>
      </SelectStyled>
    );
  }
}

Select.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};
