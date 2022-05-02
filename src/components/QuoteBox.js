import React, { useState } from 'react';
import data from '../quotes.json';
import '../App.css'
import '../Button.css'


const colors = ["red", "lightblue", "yellow", "lightgreen", "lightcoral"]


const QuoteBox = () => {

    const randomIndex = Math.floor(Math.random() * data.length)
    const [ index, setIndex ] = useState(randomIndex)

    const changeUser = () => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setIndex(randomIndex);
    }

    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style = `background: ${colors[randomColor]}`;
    

    //console.log(data);


    return (
        <div className="card" style={{color: colors[randomColor]}}>
            <p>{data[index].quote}</p>
            <b>{data[index].author}</b>

            <button onClick={changeUser} style={{background: colors[randomColor]}}>
               <i class='bx bx-chevron-right'></i>
            </button>
        </div>
    );
};

export default QuoteBox;