import React from 'react';
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
