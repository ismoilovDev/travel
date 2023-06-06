import React from 'react';
import './style.scss'
import not_found from '../../assets/imgs/not_found_img.jpg'

function ActorsCard({ item }) {
   return (
      <div className="actors_card">
         <div className="actors_card_head">
            <img
               src={
                  item.profile_path ?
                     `https://www.themoviedb.org/t/p/w138_and_h175_face${item.profile_path}` :
                     'https://www.movienewz.com/img/films/poster-holder.jpg'
               } 
               alt="movie_img" />
         </div>
         <div className="actors_card_body">
            <p>{item.name}</p>
         </div>
      </div>
   )
}

export default ActorsCard