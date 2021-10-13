import React from 'react';
import './Card.css';





export default function Card({ id, title, plot, poster, rate, src }) {
  const [shown, setshown] = React.useState(true)
  function show_movie_info() {
    return (
      setshown(!shown)
    )
  }

  return (
    <div className="Card" onClick={show_movie_info}>
      {shown ?

        <div className='onlycard'>
          <img src={poster} alt={title} />
          <div className="info">
            <h3>{title}</h3>
            <p>ImdbRating: <span>{rate}</span> </p>
          </div>

        </div> :
        <div className='cardInfo' style={{ position: "fixed", top: 0, bottom: 0, left: 0, backgroundColor: "rgba(0,0,0,0.95)" }}>
          <div className="info">
            <div className="pt1">
              <img src={poster} alt={title} />
              <h3>{title}</h3>
              <p>ImdbRating: <span>{rate}</span> </p>
              <p>{plot}</p>
            </div>
            <div className="pt2">
              <iframe src={src} title={title} frameBorder="0" allowFullScreen></iframe>
            </div>


          </div>
          <button onClick={show_movie_info}>BACK</button>
        </div>
      }

    </div>
  )
}
