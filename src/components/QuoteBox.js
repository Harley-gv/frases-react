import React, { useState } from 'react';
import users from '../quotes.json';
import '../App.css'
import '../Button.css'


const colors = ["red", "lightblue", "yellow", "lightgreen", "lightcoral"]


const QuoteBox = () => {

    const randomIndex = Math.floor(Math.random() * users.length)
    const [ index, setIndex ] = useState(randomIndex)

    const changeUser = () => {
        const randomIndex = Math.floor(Math.random() * users.length);
        setIndex(randomIndex);
    }

    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style = `background: ${colors[randomColor]}`;
    

    console.log(users);


    return (
        <div className="card" style={{color: colors[randomColor]}}>
            <p>{users[index].quote}</p>
            <b>{users[index].author}</b>

            <button onClick={changeUser} style={{background: colors[randomColor]}}>
               <i class='bx bx-chevron-right'></i>
            </button>
        </div>
    );
};

export default QuoteBox;