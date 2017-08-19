import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import ru from 'react-intl/locale-data/ru';

import Header from './Header';
import Product from './Product';
import List from './List';
import Footer from './Footer';

addLocaleData([...ru]);

export default function () {
  return (
    <IntlProvider locale="ru">
      <Router>
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
          <Header />
          <Route exact path="/" component={List} />
          <Route exact path="/products/mens-clothing" component={List} />
          <Route path="/products/mens-clothing/:id" component={Product} />
          <Footer />
        </div>
      </Router>
    </IntlProvider>
  );
}
