import React from 'react';
import styled from 'styled-components';

const Navigation = styled.div`
  display: none;
  margin-bottom: 1.25rem;

  @media (min-width: 48rem) {
    display: block;
  }
`;

const Title = styled.h5`
  margin: 1rem 0;
  text-transform: uppercase;
  color: #171717;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: bold;
  line-height: 1.19;
`;

const Link = styled.a`
  display: block;
  margin-bottom: 0.75rem;
  text-decoration: none;
  color: #999999;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.34;
`;

export default function() {
  return(
    <Navigation>
      <div className="row">
        <div className="col-md-3">
          <Title>
            Customer service
          </Title>
          <nav>
            <Link>
              Contact Us
            </Link>
            <Link>
              Payment
            </Link>
            <Link>
              Shipping
            </Link>
            <Link>
              Returns
            </Link>
            <Link>
              Faqs
            </Link>
            <Link>
              Live Chat
            </Link>
            <Link>
              The Burberry App
            </Link>
            <Link>
              Store Locator
            </Link>
          </nav>
        </div>
        <div className="col-md-3">
          <Title>
            Our company
          </Title>
          <nav>
            <Link>
              Our History
            </Link>
            <Link>
              Burberry Group Plc
            </Link>
            <Link>
              Careers
            </Link>
            <Link>
              Corporate Responsibility
            </Link>
            <Link>
              Site Map
            </Link>
          </nav>
        </div>
        <div className="col-md-3">
          <Title>
            Legal & Cookies
          </Title>
          <nav>
            <Link>
              Terms & Conditions
            </Link>
            <Link>
              Privacy Policy
            </Link>
            <Link>
              Cookie Policy
            </Link>
            <Link>
              Accessibility Statement
            </Link>
            <Link>
              Japan Only - SCTL indications
            </Link>
          </nav>
        </div>
      </div>
    </Navigation>
  );
};
