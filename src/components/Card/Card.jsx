import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function Card({ item }) {
  // const title = item?.title.length > 22 ? item?.title.slice(0, 22) + '...' : item?.title
  return (
    <div className="movie_card">
      <Link to={`/detail/${item.id}`} className="movie_card_head">
        <div className="movie_card_head_box">
          <img
            src={item.img_src}
            alt="movie_img"
          />
        </div>
        <div className="movie_card_body">
          <p>{item.title}</p>
        </div>
      </Link>
    </div>
  )
}

export default Card