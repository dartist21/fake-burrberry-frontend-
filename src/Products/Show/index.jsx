import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

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

export default function () {
  return (
    <div>
      <Helmet>
        <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
        <meta
          name="description"
          content="Explore men's trench coats from Burberry, with our Heritage
                Trench Coat in several fits as well as double and
                single-breasted styles in many materials."
        />
      </Helmet>
      <Section>
        <div className="container">
          <Product />
        </div>
      </Section>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-4">
            <ReadMoreAccordion title="Description" active>
              <p>A refined car coat crafted in protective cotton gabardine.</p>
              <p>
                Invented by Thomas Burberry in 1879, cotton gabardine is a tightly woven and
                breathable fabric that protects against wind and rain.
              </p>
              <p>
                Raglan sleeves and a concealed button closure complement the clean tailored lines.
              </p>
              <p>The piece is finished with a distinctive check undercollar.</p>
              <ul>
                <li>
                  Coat length: 98cm/38.6in. This is based on a size UK 48 as proportions change
                  slightly according to size.
                </li>
                <li>Outer: 100% cotton</li>
                <li>Check lining: 100% cotton</li>
                <li>Sleeve lining: 100% viscose</li>
                <li>Buttons: buffalo horn</li>
                <li>Specialist dry clean</li>
                <li>Made in Europe</li>
                <li>Item 39428531</li>
              </ul>
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
