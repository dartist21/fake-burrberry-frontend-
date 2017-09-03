import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Option from './Option';

const FilterStyled = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
`;

export default class Filter extends Component {
  state = {
    isActive: false,
  };

  toggleActive = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
    this.props.toggleOverlay();
  };

  render() {
    return (
      <div className="container">
        <FilterStyled>
          <Option name="Category" isActive={this.state.isActive} toggleActive={this.toggleActive}>
            <div>
              <p>Content content content content content content content</p>
              <p>content content content content content content content</p>
              <p>content content content content content content content</p>
              <p>content content content content content content content</p>
              <p>content content content content content content content</p>
            </div>
          </Option>
          <Option name="Colour" isActive={this.state.isActive} toggleActive={this.toggleActive}>
            <div>
              <p>Content content content content content content content</p>
              <p>content content content content content content content</p>
              <p>content content content content content content content</p>
              <p>content content content content content content content</p>
              <p>content content content content content content content</p>
              <p>content content content content content content content</p>
            </div>
          </Option>
          <Option name="Size" isActive={this.state.isActive} toggleActive={this.toggleActive}>
            <div>
              <p>Content content content content content content content</p>
              <p>content content content content content content content</p>
              <p>content content content content content content content</p>
              <p>content content content content content content content</p>
              <p>content content content content content content content</p>
              <p>content content content content content content content</p>
            </div>
          </Option>
          <Option
            right
            name="Sort by price"
            isActive={this.state.isActive}
            toggleActive={this.toggleActive}
          >
            <div>
              <p>high or</p>
              <p>low</p>
              <p>it’s medium length of</p>
              <p>content</p>
            </div>
          </Option>
        </FilterStyled>
      </div>
    );
  }
}

Filter.propTypes = {
  toggleOverlay: PropTypes.func.isRequired,
};
