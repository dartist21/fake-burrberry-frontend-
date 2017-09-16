import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledGallery = styled.div`
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

export default function Gallery(props) {
  return (
    <StyledGallery>
      <Image src={`${props.images[0]}?$BBY_V2_ML_3X4$&wid=600&hei=800`} alt={props.title} />
      <Image src={`${props.images[1]}?$BBY_V2_ML_3X4$&wid=600&hei=800`} alt={props.title} />
      <Image src={`${props.images[2]}?$BBY_V2_ML_3X4$&wid=600&hei=800`} alt={props.title} />
      <Image src={`${props.images[3]}?$BBY_V2_ML_3X4$&wid=600&hei=800`} alt={props.title} />
    </StyledGallery>
  );
}

Gallery.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
