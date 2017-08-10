import React, { Component } from 'react';
import { Helmet } from "react-helmet";
//
import Header from './Header'
import Product from './Product';
import ReadMoreAccordion from './ReadMoreAccordion';
import Delivery from './Delivery';
import Recomendations from './Recomendations'
import AdditionalOffers from './AdditionalOffers'
import Footer from './Footer'

class App extends Component {
  render() {
    let descriptionParagraph =
    <div>
      <p>
        A refined car coat crafted in protective cotton gabardine.
      </p>
      <p>
        Invented by Thomas Burberry in 1879, cotton gabardine is a tightly woven and breathable fabric that protects against wind and rain.
      </p>
      <p>
        Raglan sleeves and a concealed button closure complement the clean tailored lines.
      </p>
      <p>
        The piece is finished with a distinctive check undercollar.
      </p>
      <ul>
        <li>Coat length: 98cm/38.6in. This is based on a size UK 48 as proportions change slightly according to size.</li>
        <li>Outer: 100% cotton</li>
        <li>Check lining: 100% cotton</li>
        <li>Sleeve lining: 100% viscose</li>
        <li>Buttons: buffalo horn</li>
        <li>Specialist dry clean</li>
        <li>Made in Europe</li>
        <li>Item 39428531</li>
      </ul>
    </div>;

    return (
      <div className="App">
        <Helmet>
          <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
          <meta
            name="description"
            content="Explore men's trench coats from Burberry, with our Heritage Trench Coat in several fits as well as double and single-breasted styles in many materials."
          />
        </Helmet>
        <Header />
        <div className="container">
          <Product />
          <ReadMoreAccordion title="Description"
                             text={descriptionParagraph}
                             className="read-more-accordion" />
          <ReadMoreAccordion title="SHIPPING & RETURNS"
                             className="read-more-accordion shipping-and-returns" />
          <Delivery />
          <Recomendations />
          <AdditionalOffers />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
