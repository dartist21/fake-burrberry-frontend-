import React, { Component } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { get } from '../../data';

import Product from './Product';
import ReadMoreAccordion from './ReadMoreAccordion';
import Delivery from './Delivery';
import Recomendations from './Recomendations';
import AdditionalOffers from './AdditionalOffers';

const Section = styled.section`@media screen and (min-width: 62rem) {background: #d4bdad;}`;

const DescriptionImage = styled.img`
  display: none;
  @media screen and (min-width: 62rem) {
    display: block;
    width: 100%;
  }
`;

const MorePhotos = styled.div`
  display: none;
  @media screen and (min-width: 62rem) {
    display: block;
    margin-top: 4rem;
    margin-bottom: 4rem;
  }

  .row div:first-child img {
    margin-top: 2rem;
  }
  .row div:nth-child(2) img {
    margin-top: 6rem;
  }
`;

const Image = styled.img`
  display: block;
  min-width: 100%;
`;

export default class Show extends Component {
  state = {
    title: '',
    multiCurrencyPrices: {},
    colours: [],
    sizes: [],
    id: '',
    description: '',
    details: '',
  };

  componentDidMount() {
    const url = `/v1/products/${this.props.match.params.category}/${this.props.match.params
      .section}/${this.props.match.params.id}/`;

    get(url).then((data) => {
      console.log(data);
      this.setState({
        title: data.title,
        multiCurrencyPrices: data.multiCurrencyPrices,
        colours: data.colours,
        sizes: data.sizes,
        id: data.id,
        description: data.description,
        details: data.details,
      });
    });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>
            {this.state.title}
          </title>
          <meta
            name="description"
            content="Explore men's trench coats from Burberry, with our Heritage
                Trench Coat in several fits as well as double and
                single-breasted styles in many materials."
          />
        </Helmet>
        <Section>
          <div className="container">
            <Product
              colours={this.state.colours}
              sizes={this.state.sizes}
              multiCurrencyPrices={this.state.multiCurrencyPrices}
              title={this.state.title}
              id={this.state.id}
            />
          </div>
        </Section>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-lg-4">
              <ReadMoreAccordion title="Description" active>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${this.state.description} ${this.state.details}`,
                  }}
                />
              </ReadMoreAccordion>
            </div>
            <div className="col-lg-8">
              <DescriptionImage
                src={`${process.env.PUBLIC_URL}/img/img7.jpg`}
                alt="Long Cotton Gabardine Car Coat Detail"
              />
            </div>
          </div>
          <MorePhotos>
            <div className="row">
              <div className="col-lg-4">
                <Image
                  first
                  src={`${process.env.PUBLIC_URL}/img/img8.jpg`}
                  alt="Long Cotton Gabardine Car Coat Detail"
                />
              </div>
              <div className="col-lg-4">
                <Image
                  second
                  src={`${process.env.PUBLIC_URL}/img/img9.jpg`}
                  alt="Long Cotton Gabardine Car Coat Detail"
                />
              </div>
              <div className="col-lg-4">
                <Image
                  src={`${process.env.PUBLIC_URL}/img/img10.jpg`}
                  alt="Long Cotton Gabardine Car Coat Detail"
                />
              </div>
            </div>
          </MorePhotos>
          <ReadMoreAccordion title="SHIPPING & RETURNS" mobile />
          <Delivery />
          <Recomendations />
          <AdditionalOffers />
        </div>
      </div>
    );
  }
}

Show.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      category: PropTypes.string,
      section: PropTypes.string,
      id: PropTypes.string,
      description: PropTypes.string,
      details: PropTypes.string,
    }),
  }).isRequired,
};
