import React from "react";
import { Helmet } from "react-helmet";

import Header from "./Header";
import Product from "./Product";
import Footer from "./Footer";

export default function() {
  return (
    <div>
      <Helmet>
        <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
        <meta
          name="description"
          content="Explore men's trench coats from Burberry, with our Heritage Trench Coat in several fits as well as double and single-breasted styles in many materials."
        />
      </Helmet>
      <Header />
      <Product />
      <Footer />
    </div>
  );
}
