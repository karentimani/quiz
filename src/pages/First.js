import React from "react";
import './style.css'


const First =({onQuizAll,onQuizHarry,onQuizLiam,onQuizLouis,onQuizNiall,onQuizZayn}) => {
    return(
        <div className="start">
                <div className="start-components">
                    <div className="components">
                        <h1>What quiz would you like to take?</h1>
                        <button className="button is-info is-medium" onClick={onQuizAll}>One Direction Quiz</button>
                        <button className="button is-info is-medium" onClick={onQuizHarry}>Harry Styles Quiz</button>
                        <button className="button is-info is-medium" onClick={onQuizLouis}>Louis Tomlinson Quiz</button>
                        <button className="button is-info is-medium" onClick={onQuizNiall}>Niall Horan Quiz</button>
                        <button className="button is-info is-medium" onClick={onQuizZayn}>Zayn Malik Quiz</button>
                        <button className="button is-info is-medium" onClick={onQuizLiam}>Liam Payne Quiz</button>
                        <p>Good Luck!</p>

                    </div>
                </div>
            </div>
            
    )
}

export default First;

