import React from 'react'
import { useState } from 'react';
import { Movies } from './Movies';
import './Addmovie.css'


export default function Addmovie({ toggleAdding }) {
    const [newmovie, setnewmovie] = useState({
        Title: "",
        Year: '',
        Genre: "",
        Plot: "",
        Poster: "",
        imdbRating: '',
        src: ""
    })
    function handleChange(e) {
        setnewmovie({
            ...newmovie, [e.target.name.trim()]: e.target.value
        })

    }
    function btnadd(e) {
        e.preventDefault()
        let test = false;
        for (const mv of Movies) {
            console.log(mv.Title)
            console.log(newmovie.Title)
            if (mv.Title.toLocaleLowerCase() === newmovie.Title.toLowerCase()) {
                test = true
            }
        }
        test ? alert('Movie Exist Already') : Movies.push(newmovie)
        e.target.reset()
    }

    return (
        <div className='addmovie'>
            <form action="" onSubmit={btnadd}>
                <div className='myinput'>
                    <label htmlFor="Title"> Title :</label>
                    <input type="text" name='Title' required onChange={handleChange} />
                </div>
                <div className='myinput'>
                    <label htmlFor="Year"> Year :</label>
                    <input type="number" name='Year' required onChange={handleChange} />
                </div>
                <div className='myinput'>
                    <label htmlFor="Genre"> Genre :</label>
                    <input type="text" name='Genre' required onChange={handleChange} />
                </div>
                <div className='myinput'>
                    <label htmlFor="Plot"> Plot :</label>
                    <input type="text" name='Plot' required onChange={handleChange} />
                </div>
                <div className='myinput'>
                    <label htmlFor="Poster"> Poster :</label>
                    <input type="url" name='Poster' required onChange={handleChange} />
                </div>
                <div className='myinput'>
                    <label htmlFor="imdbRating"> ImdbRating :</label>
                    <input type="number" name='imdbRating' min="0" max="10" required onChange={handleChange} />
                </div>
                <div className='myinput'>
                    <label htmlFor="src"> Image src :</label>
                    <input type="url" name='src' required onChange={handleChange} />
                </div>
                <button type='submit'>Add Movie</button>
            </form>
            <button onClick={toggleAdding}>Back</button>
        </div>
    )
}
