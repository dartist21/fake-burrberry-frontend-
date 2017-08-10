import React, { Component } from 'react';
import './ReadMoreAccordion.css';

class ReadMoreAccordion extends Component {
  render() {
    return (
      <section className={this.props.className}>
        <button type="button" className="read-more-accordion__button">
          <h2 className="read-more-accordion__title read-more-accordion__title--active">{this.props.title}</h2>
        </button>
        <div>{this.props.text}</div>
      </section>
    );
  }
}

export default ReadMoreAccordion;
