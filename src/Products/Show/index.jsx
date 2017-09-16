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

const Section = styled.section`@media screen and (min-width: 62rem) {background: #ffffff;}`;

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
    images: [],
    linkedProducts: [],
  };

  componentDidMount() {
    const url = `/v1/products/${this.props.match.params.category}/${this.props.match.params
      .section}/${this.props.match.params.slug}/`;

    const recommendUrl = `/v1/products/${this.props.match.params.category}/${this.props.match.params
      .section}/`;

    get(url).then((data) => {
      this.setState({
        title: data.title,
        multiCurrencyPrices: data.multiCurrencyPrices,
        colours: data.colours,
        sizes: data.sizes,
        id: data.id,
        description: data.description,
        details: data.details,
        images: data.images,
      });
    });

    get(recommendUrl).then((data) => {
      this.setState({
        linkedProducts: data.items.slice(0, 4),
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
              images={this.state.images}
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
                src={`${this.state.images[1]}?$BBY_V2_ML_3X4$&wid=600&hei=800`}
                alt={this.state.title}
              />
            </div>
          </div>
          <MorePhotos>
            <div className="row">
              <div className="col-lg-4">
                <Image
                  first
                  src={`${this.state.images[2]}?$BBY_V2_ML_3X4$`}
                  alt={this.state.title}
                />
              </div>
              <div className="col-lg-4">
                <Image
                  second
                  src={`${this.state.images[3]}?$BBY_V2_ML_3X4$`}
                  alt={this.state.title}
                />
              </div>
              <div className="col-lg-4">
                <Image src={`${this.state.images[4]}?$BBY_V2_ML_3X4$`} alt={this.state.title} />
              </div>
            </div>
          </MorePhotos>
          <ReadMoreAccordion title="SHIPPING & RETURNS" mobile />
          <Delivery />
          <Recomendations linkedProducts={this.state.linkedProducts} match={this.props.match} />
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
      slug: PropTypes.string,
      description: PropTypes.string,
      details: PropTypes.string,
    }),
  }).isRequired,
};
