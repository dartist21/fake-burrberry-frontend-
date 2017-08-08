import React, { Component } from 'react';

import './Product.css';

class Product extends Component {
  render() {
    return (
      <section className="product">
        <h1 className="product__title">Long Cotton Gabardine Car Coat</h1>
        <div className="row">
          <div className="col-xs-12 col-md-7">
            <div className="product__gallery">
              <img src="img/img1.jpg"
      		         className="gallery-img"
                   alt="Long Cotton Gabardine Car Coat" />
              <img src="img/img1.jpg"
                   className="gallery-img"
                   alt="Long Cotton Gabardine Car Coat" />
              <img src="img/img1.jpg"
           		     className="gallery-img"
                   alt="Long Cotton Gabardine Car Coat" />
              <img src="img/img1.jpg"
                   className="gallery-img"
                   alt="Long Cotton Gabardine Car Coat" />
            </div>
          </div>
          <div className="col-xs-12 col-md-5">
            <div className="product__info">
              <div className="product__price-number">
                <h2 className="product__price">110 000 руб</h2>
                <p className="product__number">Item 39428531</p>
              </div>
              <p className="product__color">Colour: Honey</p>
              <div className="product__color-picker-btns">
                <button type="button" name="color-picker" className="color-picker-btn color-picker-btn--black">Choose black color</button>
                <button type="button" name="color-picker" className="color-picker-btn color-picker-btn--fawn"> Choose fawn color</button>
              </div>
            </div>
            <div className="product__properties-btns">
              <button type="button" name="size-picker" className="btn btn--bg-black">SELECT A SIZE</button>
              <button type="submit" name="submit" className="btn btn--bg-white">FIND IN STORE</button>
              <button type="button" name="size-help" className="product__size-help">NEED SIZE HELP?</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Product;
