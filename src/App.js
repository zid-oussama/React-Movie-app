import './App.css';
import { useState } from 'react';
import Main from './Components/Main.js';
import Card from './Components/Card.js';
import Search from './Components/Search';
import Addmovie from './Components/Addmovie';
import { Movies } from './Components/Movies';
import ReactStars from "react-rating-stars-component";


function App() {
  const [text, setText] = useState('')
  const [theRate, settheRate] = useState(null)
  const [addingmv, setaddingmv] = useState(false)
  const movieComponent = Movies.filter((el => (el.Title.toLowerCase().includes(text.toLowerCase()) && parseInt(el.imdbRating) >= theRate))).map((el, i) => {
    return (
      <Card key={i} title={el.Title} plot={el.Plot} poster={el.Poster} rate={el.imdbRating} src={el.src} />
    )
  })


  function textWriting(e) {
    setText(e.target.value)
  }

  function ratingChanged(newRating) {
    settheRate(newRating)
  }
  function toggleAdding() {
    return (
      setaddingmv(!addingmv)
    )
  }


  return (
    <div className="App">
      <Main />
      <div className='searching'>
        <button onClick={toggleAdding}>Add Your Movie</button>
        {addingmv ? <Addmovie toggleAdding={toggleAdding} /> : null}
        <Search fct={textWriting} />
        <ReactStars
          count={10}
          onChange={ratingChanged}
          size={24}
          value={0}
          activeColor="#ffd700"
        />
        {theRate !== null ? <h3 style={{ color: 'white' }}>Looking For Movies With Rate Over : {theRate}</h3> : null}
      </div>
      <div className="cards" >
        {movieComponent}
      </div>

    </div>
  );
}

export default App;


