import React from "react";
import { useState } from "react";
import "./style.css";

const Liam = () => {
    var Liambox = [

      {
        Questions: "When was Liam born?",
        Answerbox: [
          { Answer: "August 29", isCorrect: true },
          { Answer: "September 13", isCorrect: false},
          { Answer: "January 12", isCorrect: false },
          { Answer: "December 24", isCorrect: false },
        ],
      },

      {
        Questions: "Where was Liam born?",
        Answerbox: [
          { Answer: "Bradford", isCorrect: false },
          { Answer: "Doncaster", isCorrect: false},
          { Answer: "Mullingar", isCorrect: false },
          { Answer: "Redditch", isCorrect: false },
          { Answer: "Wolverhampton", isCorrect:true},
        ],
      },

      {
        Questions: "What is Liam's middle name?",
        Answerbox: [
          { Answer: "James", isCorrect: true },
          { Answer: "Javadd", isCorrect: false },
          { Answer: "William", isCorrect: false },
          { Answer: "Louise", isCorrect: false },
          { Answer: "Edward", isCorrect: false },
        ],
      },

      

      {
        Questions: "What did Liam sing on X Factor?",
        Answerbox: [
          { Answer: "Let Me Love You", isCorrect: false },
          { Answer: "Cry Me a River", isCorrect: true },
          { Answer: "So Sick", isCorrect: false },
          { Answer: "Hey There Delilah", isCorrect: false },
          { Answer: "Hey, Soul Sister", isCorrect: false },
        ],
      },



      {
        Questions: "What was the name of Liams's first solo single? ",
        Answerbox: [
          { Answer: "Familiar", isCorrect: false },
          { Answer: "Strip that Down", isCorrect:true },
          { Answer: "Bedroom Floor", isCorrect: false },
          { Answer: "Polaroid", isCorrect: false },
          { Answer: "Get Low", isCorrect: false },
        ],
      },

      {
        Questions: "How many albums does Liam have?",
        Answerbox: [
          { Answer: "1", isCorrect: true },
          { Answer: "2 ", isCorrect: false },
          { Answer: "3", isCorrect: false },
          { Answer: "4", isCorrect: false },
          { Answer: "5 ", isCorrect: false },
        ],
      },

      {
        Questions: "What is the name of his recent album?",
        Answerbox: [
          { Answer: "Headlines", isCorrect: false },
          { Answer: "LP1", isCorrect: true },
          { Answer: "Heart Meet Break", isCorrect: false },
          { Answer: "Remember", isCorrect: false },
          { Answer: "Stack it Up", isCorrect: false },
        ],
      },

      {
        Questions: "What is Liam afraid of?",
        Answerbox: [
          { Answer: "spiders", isCorrect: false },
          { Answer: "hights", isCorrect: false },
          { Answer: "insects", isCorrect: false },
          { Answer: "spoons", isCorrect: true },
          { Answer: "ocean ", isCorrect: false },
        ],
      },

      {
        Questions: "What is Liam's son named?",
        Answerbox: [
          { Answer: "Khai ", isCorrect: false },
          { Answer: "Jamy", isCorrect: false },
          { Answer: "Aidon", isCorrect: false },
          { Answer: "Mark", isCorrect: false },
          { Answer: "Bear", isCorrect: true },
        ],
      },

      {
        Questions: "what happened that led for liam's career to go downhill?",
        Answerbox: [
          { Answer: "stopped writing music", isCorrect: false },
          { Answer: "Lost his voice", isCorrect: false },
          { Answer: "appearing in an episode of Logan Paul’s podcast", isCorrect: true },
          { Answer: "Didn't go on tour", isCorrect: false },
          
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
        if (nextQuestions < Liambox.length) {
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
                Your score is {score} / {Liambox.length}
              </h2>
              <button onClick={refreshPage}>Restart Quiz</button>
              
              
            
            </div>
          ) : (
            <>
          
    
              <div className="question-section">
                <div className="question-count">
                  <span>{currentQuestions + 1}</span>/{Liambox.length}
                </div>
                <div className="question-text">
                  <h2> {Liambox[currentQuestions].Questions}</h2>
                </div>
              </div>
    
              <div className="answer-section">
                {Liambox[currentQuestions].Answerbox.map((answer) => (
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

   

    export default Liam;