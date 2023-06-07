import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Card from '../Card/Card';

const responsive = {
   0: {
      items: 1
   },
   768: {
      items: 2
   },
   992: {
      items: 3,
      itemsFit: 'contain'
   },
};

const Carusel = ({ contents, type }) => {
   let items = []

   if (type === "home" && contents) {
      items = contents.map((item, index) => {
         return <Card item={item} />
      })
   }

   return (
      <>
         {
            contents 
            && 
            <AliceCarousel
               mouseTracking
               responsive={responsive}
               autoPlay
               autoPlayInterval={1000}
               disableButtonsControls
               disableDotsControls
               infinite
               items={items}
            />
         }
      </>
   );
}

export default Carusel;