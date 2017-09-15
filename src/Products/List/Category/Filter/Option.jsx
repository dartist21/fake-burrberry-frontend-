import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import arrow from '../../../../assets/img/arrow.svg';
import Dropdown from './Dropdown';

const Wrapper = styled.div`
  position: relative;
  margin-left: ${props => (props.right ? 'auto' : '')};
`;

const OptionStyled = styled.button`
  flex-shrink: 0;
  margin: 1rem .5rem 0 0;
  padding: 1.5rem 0;
  border: none;
  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 1.33;
  color: ${props => (props.isActive && props.isFilterOpen ? '#171717' : '')};
  background-color: #f3f3f3;
  font-weight: 400;
  opacity: ${props => (props.isActive && !props.isFilterOpen ? '0.3' : '')};
  cursor: pointer;
  &:after {
    content: "";
    display: inline-block;
    width: 13px;
    height: 6px;
    margin-left: 0.5rem;
    background-image: url(${arrow});
    background-size: cover;
    flex-shrink: 0;
    transform: ${props => (props.isActive && props.isFilterOpen ? 'rotate(180deg)' : '')};
  }

  @media only screen and (min-width: 48rem) {
    margin-left: ${props => (props.right ? '' : '-0.5rem')};
    margin-top: 1rem;
    margin-right: ${props => (props.right ? '-0.5rem' : '2.5rem')};
    padding: 1.5rem .5rem;
  }
`;

export default class Option extends Component {
  state = {
    isFilterOpen: false,
  };

  handleClick = () => {
    if (!this.state.isFilterOpen) {
      this.setState({
        isFilterOpen: true,
      });

      this.props.toggleActive();
    }
  };

  closeDropdown = () => {
    this.setState({
      isFilterOpen: false,
    });

    this.props.toggleActive();
  };

  render() {
    return (
      <Wrapper right={this.props.right}>
        <OptionStyled
          right={this.props.right}
          type="button"
          isActive={this.props.isActive}
          isFilterOpen={this.state.isFilterOpen}
          onClick={this.handleClick}
        >
          {this.props.name}
        </OptionStyled>

        {this.state.isFilterOpen &&
          <Dropdown right={this.props.right} closeDropdown={this.closeDropdown}>
            {this.props.children}
          </Dropdown>}
      </Wrapper>
    );
  }
}

Option.propTypes = {
  isActive: PropTypes.bool.isRequired,
  right: PropTypes.bool.isRequired,
  toggleActive: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

Option.defaultProps = {
  right: false,
  isActive: false,
};
