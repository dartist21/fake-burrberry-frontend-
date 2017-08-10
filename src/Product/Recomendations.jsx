import React, { Component } from 'react';
import './Recomendations.css';

class Recomendations extends Component {
  render() {
    return (
      <section className="recommendations">
      <h2 className="recommendations__title">WE RECOMMEND</h2>
        <div className="row">
          <div className="col-xs-6 col-md-3">
            <a href="#" className="recommendation-card">
              <img className="recommendation-card__img" src="img/img3.jpg" alt="photo Emroided Hooded" />
              <h3 className="recommendation-card__title">Emroided Hooded Content For Three Lines</h3>
              <h5 className="recommendation-card__price">27 000 руб</h5>
            </a>
          </div>
          <div className="col-xs-6 col-md-3">
            <a href="#" className="recommendation-card">
              <img className="recommendation-card__img" src="img/img2.jpg" alt="photo Relaxed Fit Stretch Jeans" />
              <h3 className="recommendation-card__title">Relaxed Fit Stretch Jeans Content For Three Lines</h3>
              <h5 className="recommendation-card__price">22 500 руб</h5>
            </a>
          </div>
          <div className="col-xs-6 col-md-3">
            <a href="#" className="recommendation-card">
              <img className="recommendation-card__img" src="img/img4.jpg" alt="photo Leather and House Check" />
              <h3 className="recommendation-card__title">Leather and House Check Content For Three Lines</h3>
              <h5 className="recommendation-card__price">120 000 руб</h5>
            </a>
          </div>
          <div className="col-xs-6 col-md-3">
            <a href="#" className="recommendation-card">
              <img className="recommendation-card__img" src="img/img5.jpg" alt="photo Leather Wingtip Check" />
              <h3 className="recommendation-card__title">Leather Wingtip Check Content For Three Lines</h3>
              <h5 className="recommendation-card__price">46 000 руб</h5>
            </a>
          </div>
        </div>
    </section>
    );
  }
}

export default Recomendations;
