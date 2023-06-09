import React from 'react'
import Main from '../../components/Main/Main'
import { Wrap } from '../../styles/styled'
import bg_img from "../../assets/imgs/contact_bg.jpg"
import GalleryWrap from '../../components/GalleryWrap/GalleryWrap'
import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/thumbnails.css";


function Gallery() {
   return (
      <Main>
         <Wrap bg_url={bg_img} isMoun={true}>
            <div className="text_box">
               <h1>Gallery</h1>
               <p>
                  In this category you can view most vivid photos taken in sunny Uzbekistan
               </p>
            </div>
         </Wrap>
         <GalleryWrap />
      </Main>
   )
}

export default Gallery