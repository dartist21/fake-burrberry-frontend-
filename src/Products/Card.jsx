import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedPlural } from 'react-intl';

import FormattedPrice from '../Common/FormattedPrice';
import Heart from '../Common/Heart';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #171717;
`;

const Card = styled.div`
  margin-bottom: 2rem;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  line-height: 1.34;
  font-weight: 400;
`;

const Img = styled.img`
  width: 100%;
  margin-bottom: 1rem;
  vertical-align: top;
`;

const Wrapper = styled.div`display: flex;`;

const Info = styled.div`flex-basis: 100%;`;

const Label = styled.p`
  margin: 0;
  margin-bottom: 0.5rem;
`;

const Like = styled.button`
  width: 14px;
  height: 14px;
  padding: 0;
  border: none;
  background: Transparent;
  cursor: pointer;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: .5rem;
  font-weight: 600;
  font-size: .75rem;

  @media only screen and (min-width: 48rem) {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`;

const Colors = styled.p`
  margin: 0;
  margin-bottom: .25rem;
`;

const Button = styled.button`
  padding: 0;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #171717;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #171717;
`;

const Price = styled.h5`
  margin: 0;
  font-weight: 400;
  font-size: 0.75rem;
`;

export default class ProductCard extends Component {
  state = {
    isLiked: false,
  };

  handleLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
    }));
  };

  render() {
    return (
      <Card>
        <StyledLink to={this.props.to}>
          <Img src={this.props.image} alt={this.props.title} />
        </StyledLink>
        <Wrapper>
          <Info>
            <Label>
              {this.props.label}
            </Label>
            <StyledLink to={this.props.to}>
              <Title>
                {this.props.title}
              </Title>
            </StyledLink>
            <Colors>
              Available in&nbsp;
              <Button type="button">
                {this.props.colorsNumber}
                <FormattedPlural value={this.props.colorsNumber} one=" colour" other=" colours" />
              </Button>
            </Colors>
            <Price>
              <FormattedPrice price={this.props.price} currency="RUB" />
            </Price>
          </Info>
          <Like onClick={this.handleLike}>
            <Heart fill={this.state.isLiked ? '#171717' : 'none'} />
          </Like>
        </Wrapper>
      </Card>
    );
  }
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  colorsNumber: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  to: PropTypes.string.isRequired,
};

ProductCard.defaultProps = {
  label: '',
};
