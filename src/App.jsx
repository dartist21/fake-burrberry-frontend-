import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import ru from 'react-intl/locale-data/ru';

import Header from './Header';
import Show from './Products/Show';
import List from './Products/List';
import Footer from './Footer';

addLocaleData(ru);

export default function () {
  return (
    <IntlProvider locale="ru">
      <Router>
        <div>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/men/suits" />
            <Route exact path="/:category" component={List} />
            <Route exact path="/:category/:section" component={List} />
            <Route exact path="/:category/:section/:slug" component={Show} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </IntlProvider>
  );
}
