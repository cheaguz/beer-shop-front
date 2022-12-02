import React from 'react';
import Slider from "react-slick";
import { banner } from '../assets/mock-banners';
import { Container } from '@chakra-ui/react';

export const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight : true,
        arrows : true,
        autoplay : true
      };

  return (
    <Container maxW='container.lg' h={'300px'} mt={8}>
        <Slider {...settings} adaptiveHeight={true}>
           {banner.map(img => (
                <img id={img.id} className='banner-img' src={img.img} alt='banners' />
           ))}
        </Slider>
        </Container>
  )
}
