import React from "react";
import { useState } from "react";
import "./style.css";

const Louis = () => {
    var Louisbox = [

      {
        Questions: "When was Louis Tomlinson born?",
        Answerbox: [
          { Answer: "January 16", isCorrect: false },
          { Answer: "September 13", isCorrect: false },
          { Answer: "February 1", isCorrect: false },
          { Answer: "December 24", isCorrect: true },
        ],
      },

      {
        Questions: "Where was Louis born?",
        Answerbox: [
          { Answer: "Bradford", isCorrect: false },
          { Answer: "Doncaster", isCorrect: true },
          { Answer: "Mullingar", isCorrect: false },
          { Answer: "Redditch", isCorrect: false },
          { Answer: "Wolverhampton", isCorrect:false},
        ],
      },

      {
        Questions: "What is Louis middle name?",
        Answerbox: [
          { Answer: "William", isCorrect: true },
          { Answer: "Charles", isCorrect: false },
          { Answer: "Claire", isCorrect: false },
          { Answer: "Louise", isCorrect: false },
          { Answer: "Edward", isCorrect: false },
        ],
      },

      

      {
        Questions: "What did Louis sing on X Factor?",
        Answerbox: [
          { Answer: "Let Me Love You", isCorrect: false },
          { Answer: "Cry Me a River", isCorrect: false },
          { Answer: "So Sick", isCorrect: false },
          { Answer: "Hey There Delilah", isCorrect: true },
          { Answer: "Hey, Soul Sister", isCorrect: false },
        ],
      },



      {
        Questions: "What was the name of Louis's first solo single? ",
        Answerbox: [
          { Answer: "Miss You", isCorrect: false },
          { Answer: "Two of Us", isCorrect:false },
          { Answer: "Just Hold On", isCorrect: true },
          { Answer: "Back to You", isCorrect: false },
          { Answer: "Kill my Mind", isCorrect: false },
        ],
      },
  
      {
        Questions: "What is the name of Louis's record label?",
        Answerbox: [
          { Answer: "Double Dragon", isCorrect: false },
          { Answer: "Triple Strings ", isCorrect: true },
          { Answer: "Polymore Records", isCorrect: false },
          { Answer: "Empire Records", isCorrect: false },
          { Answer: "None of the above ", isCorrect: false },
        ],
      },

      {
        Questions: "How many albums does louis have?",
        Answerbox: [
          { Answer: "1", isCorrect: false },
          { Answer: "2 ", isCorrect: true },
          { Answer: "3", isCorrect: false },
          { Answer: "4", isCorrect: false },
          { Answer: "5 ", isCorrect: false },
        ],
      },

      {
        Questions: "What is the name of his recent album?",
        Answerbox: [
          { Answer: "Walls", isCorrect: false },
          { Answer: "Four", isCorrect: false },
          { Answer: "Faith in the Future", isCorrect: true },
          { Answer: "All this Time", isCorrect: false },
          { Answer: "Chicago ", isCorrect: false },
        ],
      },

      {
        Questions: "How many awards did louis won?",
        Answerbox: [
          { Answer: "5", isCorrect: false },
          { Answer: "8", isCorrect: false },
          { Answer: "10", isCorrect: false },
          { Answer: "18", isCorrect: true },
          { Answer: "20 ", isCorrect: false },
        ],
      },

      {
        Questions: "How many kids does louis have?",
        Answerbox: [
          { Answer: "0", isCorrect: false },
          { Answer: "1", isCorrect: true },
          { Answer: "2", isCorrect: false },
          { Answer: "3", isCorrect: false },
          { Answer: "He isn't married", isCorrect: false },
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
        if (nextQuestions < Louisbox.length) {
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
                Your score is {score} / {Louisbox.length}
              </h2>
              <button onClick={refreshPage}>Restart Quiz</button>
             
              
            
            </div>
          ) : (
            <>
          
    
              <div className="question-section">
                <div className="question-count">
                  <span>{currentQuestions + 1}</span>/{Louisbox.length}
                </div>
                <div className="question-text">
                  <h2> {Louisbox[currentQuestions].Questions}</h2>
                </div>
              </div>
    
              <div className="answer-section">
                {Louisbox[currentQuestions].Answerbox.map((answer) => (
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

   

    export default Louis;