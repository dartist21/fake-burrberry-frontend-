import React, { Component } from 'react';
import './AdditionalOffers.css';

class AdditionalOffers extends Component {
  render() {
    return (
      <section className="additional-offers">
        <h2 className="additional-offers__title">MORE FOR YOU</h2>
        <a href="#" className="additional-offers__link">Men’s Black Trench Coats</a>
        <a href="#"className="additional-offers__link">Men’s Short Trench Coats</a>
        <a href="#"className="additional-offers__link">Men’s Long Trench Coats</a>
      </section>
    );
  }
}

export default AdditionalOffers;
