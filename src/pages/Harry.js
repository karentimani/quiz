import React from "react";
import { useState } from "react";
import "./style.css";

const Harry = () => {
    var Harrybox = [

      {
        Questions: "When was Harry Styles born?",
        Answerbox: [
          { Answer: "January 16", isCorrect: false },
          { Answer: "September 13", isCorrect: false },
          { Answer: "February 1", isCorrect: true },
          { Answer: "December 24", isCorrect: false },
        ],
      },

      {
        Questions: "Where was Harry born",
        Answerbox: [
          { Answer: "Bradford", isCorrect: false },
          { Answer: "Doncaster", isCorrect: false },
          { Answer: "Mullingar", isCorrect: false },
          { Answer: "Redditch", isCorrect: true },
          { Answer: "Wolverhampton", isCorrect:false},
        ],
      },

      {
        Questions: "what is Harry's middle name",
        Answerbox: [
          { Answer: "William", isCorrect: false },
          { Answer: "Charles", isCorrect: false },
          { Answer: "Claire", isCorrect: false },
          { Answer: "Louise", isCorrect: false },
          { Answer: "Edward", isCorrect: true },
        ],
      },

      {
        Questions: "What was the name of the bakery where Harry worked?",
        Answerbox: [
          { Answer: "W Mandeville bakery", isCorrect: true },
          { Answer: "Minima Bakery", isCorrect: false },
          { Answer: "Locally Baked", isCorrect: false },
          { Answer: "Home-Baked Happiness", isCorrect: false },
          { Answer: " Holy Cannoli Bakery", isCorrect: false},
        ],
      },

      {
        Questions: "What did Harry sing on X Factor?",
        Answerbox: [
          { Answer: "Let Me Love You", isCorrect: false },
          { Answer: "Cry Me a River", isCorrect: false },
          { Answer: "So Sick", isCorrect: false },
          { Answer: "Hey There Delilah", isCorrect: false },
          { Answer: "Hey, Soul Sister", isCorrect: true },
        ],
      },



      {
        Questions: "What was Harry's first song as a solo artist?",
        Answerbox: [
          { Answer: "As it was", isCorrect: false },
          { Answer: "Watermellon Sugar", isCorrect:false },
          { Answer: "Sign of the times", isCorrect: true },
          { Answer: "Golden", isCorrect: false },
          { Answer: "Falling", isCorrect: false },
        ],
      },
  
      {
        Questions:
          "What was Harry's first solo album",
        Answerbox: [
          { Answer: "Harry Styles", isCorrect: true },
          { Answer: "Fine Line", isCorrect: false },
          { Answer: "Harry's House", isCorrect: false },
          { Answer: "Two Ghosts", isCorrect: false },
          { Answer: "None of the above ", isCorrect: false },
        ],
      },

      {
        Questions: "What is the name of Harry Styles brand",
        Answerbox: [
          { Answer: "Ornaments", isCorrect: false },
          { Answer: "Pleasing", isCorrect: true },
          { Answer: "Greyhound", isCorrect: false },
          { Answer: "Gioielleria", isCorrect: false },
          { Answer: "Piaget", isCorrect: false},
        ],
      },
  
      
      {
        Questions: "Which song did Harry win the 2021 BRIT Award for British Single of the Year?",
        Answerbox: [
          { Answer: "Watermelon Sugar", isCorrect: true },
          { Answer: "Falling", isCorrect: false },
          { Answer: "Sign of the times", isCorrect: false },
          { Answer: "Little Freak", isCorrect: false },
          { Answer: "Canyon Moon", isCorrect: false },
        ],
      },

      {
        Questions: "what is Harry's most recent movie",
        Answerbox: [
          { Answer: "Dunkirk", isCorrect: false },
          { Answer: "Enternals", isCorrect: false },
          { Answer: "The Swimmers", isCorrect: false },
          { Answer: "My Policeman", isCorrect: true },
          { Answer: "Dune", isCorrect: false },
        ],
      },

      


    ];

    const [currentQuestions, setCurrentQuestions] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

   
   
    const handleAnswerResponse = (isCorrect) => {
        if (isCorrect) {
          setScore(score + 1);
        }

        const nextQuestions = currentQuestions + 1;
        if (nextQuestions < Harrybox.length) {
          setCurrentQuestions(nextQuestions);
        } else {
          setShowScore(true);
        }
      };
    
      const refreshPage = () => {
        window.location.reload();
      };

    return (
        <div className="app">
          {showScore ? (
            <div className="score-section">
              
              <h2>
                Your score is {score} / {Harrybox.length}
              </h2>
              <button onClick={refreshPage}>Restart Quiz</button>
              
              
            
            </div>
          ) : (
            <>
          
    
              <div className="question-section">
                <div className="question-count">
                  <span>{currentQuestions + 1}</span>/{Harrybox.length}
                </div>
                <div className="question-text">
                  <h2> {Harrybox[currentQuestions].Questions}</h2>
                </div>
              </div>
    
              <div className="answer-section">
                {Harrybox[currentQuestions].Answerbox.map((answer) => (
                  <button onClick={() => handleAnswerResponse(answer.isCorrect)}>
                    {answer.Answer}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      );
    };

   

    export default Harry;