import React, { Component } from "react";
import styled from "styled-components";

const Gallery = styled.div`
  position: relative;
  right: 50%;
  left: 50%;
  display: flex;
  overflow-x: scroll;
  width: 100vw;
  margin: 0;
  margin-right: -50vw;
  margin-left: -50vw;
  padding: 0;

  @media (min-width: 48rem) {
    position: static;
    right: 0;
    left: 0;

    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

const Image = styled.img`
  height: 400px;

  @media (min-width: 48rem) {
    height: 576px;
    flex: none;
  }
`;

export default () => {
  return (
    <Gallery>
      <Image src="img/img1.jpg" alt="Long Cotton Gabardine Car Coat" />
      <Image src="img/img1.jpg" alt="Long Cotton Gabardine Car Coat" />
      <Image src="img/img1.jpg" alt="Long Cotton Gabardine Car Coat" />
      <Image src="img/img1.jpg" alt="Long Cotton Gabardine Car Coat" />
    </Gallery>
  );
};
