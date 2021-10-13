import React from 'react';
import './Search.css';

export default function Search(props) {


    return (
        <div className='search'>
            <form action="">
                <input type="text" onInput={props.fct} name="title" id="title" placeholder="Search Your Movie" />
            </form>
        </div>
    )
}
