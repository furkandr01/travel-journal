import React from "react";

export default function Place(props) {
  return (
    <div className="place">
      <img src={props.imageUrl} alt="pic" className="place-image" />
      <div className="place-stats">
        <div>
          <img src="../location.png" className="place-icon" />
          <span className="place-loc">{props.location} </span>
          <a href={props.googleMapsUrl} className="place-maps">
            Viev on Google Maps
          </a>
        </div>
        <div>
          <h1 className="place-title">{props.title}</h1>
          <p className="place-date">
            {props.startDate} - {props.endDate}
          </p>
          <p className="place-desc">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
