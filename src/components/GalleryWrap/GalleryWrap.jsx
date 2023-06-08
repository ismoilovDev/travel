import React, { useState } from 'react'
import Lightbox from "yet-another-react-lightbox"
import { Fullscreen, Slideshow, Thumbnails, Zoom } from 'yet-another-react-lightbox/plugins';
import { Container } from '../../styles/styled';
import { images } from '../../db/gallery_images.json'
import './style.scss'


function GalleryWrap() {
   const [index, setIndex] = useState(-1);

   return (
      <Container>
         <div className="images_row">
            {
               images.map((img, index) => (
                  <div key={img.src} className="images_row_item">
                     <img src={img.src} onClick={() => setIndex(index)} />
                  </div>
               ))
            }
         </div>
         <Lightbox
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            slides={images}
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
         />
      </Container>
   )
}

export default GalleryWrap