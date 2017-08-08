import React, { Component } from 'react';
import './Delivery.css';

class Delivery extends Component {
  render() {
    return (
      <section className="delivery">
        <div className="row">
          <div className="col-md-7">
            <img src="img/img6.jpg"
                 alt="delivery boxing photo"
  		           className="delivery__image" />
          </div>
          <div className="col-md-5">
            <h2 className="delivery__title">DELIVERY</h2>
            <h5 className="delivery__sub-title">Free Next Day Delivery</h5>
            <p className="delivery__paragraph">Order before 7pm Monday to Thursday for delivery the next day</p>

            <h5 className="delivery__sub-title">Collect-in-Store</h5>
            <p className="delivery__paragraph">Order online today and pick up your items in store as early as tomorrow</p>

            <h5 className="delivery__sub-title">Free Returns</h5>
            <p className="delivery__paragraph">Enjoy free returns on your order</p>

            <h5 className="delivery__sub-title">Free Gift Packaging</h5>
            <p className="delivery__paragraph">Discover our gift packaging, a gold lined box tied with a coloured ribbon</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Delivery;
