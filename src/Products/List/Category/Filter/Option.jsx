import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import arrow from '../../../../assets/img/arrow.svg';
import Dropdown from './Dropdown';

const Wrapper = styled.div`
  position: relative;
  margin-left: ${props => (props.right ? 'auto' : '')};
`;

const OptionStyled = styled.button`
  flex-shrink: 0;
  margin: 1rem .5rem 0 0;
  padding: 1rem 0;
  border: none;
  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 1.33;
  color: #171717;
  background-color: #f3f3f3;
  font-weight: 400;
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
  }

  @media only screen and (min-width: 48rem) {
    margin-top: 2.5rem;
    margin-right: 3rem;
    padding: 1rem .5rem;
  }

  ${props =>
    props.isActive &&
    !props.isFilterOpen &&
    css`
      opacity: 0.3;
    `} ${props =>
  props.isActive &&
      props.isFilterOpen &&
      css`
      color: #171717;
      &::after {
        transform: rotate(180deg);
      }
    `};
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
