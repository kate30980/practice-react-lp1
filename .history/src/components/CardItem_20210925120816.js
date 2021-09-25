import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="card__item__pic-wrap">
            <img src="/" alt="Travel Image" className="card__item__img" />
          </figure>
          <div className="card__item__info">
            <h5 className="card__item__text"></h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
