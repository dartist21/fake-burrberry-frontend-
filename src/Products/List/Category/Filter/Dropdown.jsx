import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  position: absolute;
  top: 100%;
  left: -1.5rem;
  padding: 1rem 1.5rem 1.5rem;
  background-color: #f3f3f3;
  z-index: 10;
  p {
    margin: 0;
    white-space: nowrap;
  }
  ${props =>
    props.right &&
    css`
    right: -1.5rem;
    left: auto;
  `};
`;

export default class Dropdown extends React.Component {
  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, false);
  }

  handleClickOutside = (e) => {
    if (!e.path.includes(this.node)) {
      this.props.closeDropdown();
    }
  };

  render() {
    return (
      <Wrapper
        innerRef={(node) => {
          this.node = node;
        }}
        right={this.props.right}
      >
        {this.props.children}
      </Wrapper>
    );
  }
}

Dropdown.propTypes = {
  right: PropTypes.bool,
  closeDropdown: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

Dropdown.defaultProps = {
  right: false,
};
