import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import { View } from './styled';

function Slide({ slide }) {
   const width = useWindowSize();

   return (
      <View to='/'>
         <div className="view_drop"></div>
         <div className="view_box">
            <img src={width >= 600 ? slide.bg_urls[1] : slide.bg_urls[0]} decoding='async' />
         </div>
         <div className="view_content">
            <h2>{slide.title}</h2>
            <span>{slide.descr}</span>
         </div>
      </View>
   )
}

export default Slide