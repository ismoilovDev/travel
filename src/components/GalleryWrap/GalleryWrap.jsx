import React from 'react'
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import { Zoom } from 'yet-another-react-lightbox/plugins';
import { Container } from '../../styles/styled';

const images = [
   {
      src: ''
   }
]

function GalleryWrap() {
   return (
      <Container>
         <div className="images_row">
            <div className="images_row_item">
               <img src="" alt="" />
            </div>
         </div>
         <Lightbox
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            slides={images}
            plugins={[Zoom]}
         />
      </Container>
   )
}

export default GalleryWrap