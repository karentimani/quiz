import React from "react";
import { useState } from "react";
import "./style.css";

const Niall = () => {
    var Niallbox = [

      {
        Questions: "When was Niall Horan born?",
        Answerbox: [
          { Answer: "January 16", isCorrect: false },
          { Answer: "September 13", isCorrect: true },
          { Answer: "February 1", isCorrect: false },
          { Answer: "December 24", isCorrect: false },
        ],
      },

      {
        Questions: "Where was Niall born?",
        Answerbox: [
          { Answer: "Bradford", isCorrect: false },
          { Answer: "Doncaster", isCorrect: false},
          { Answer: "Mullingar", isCorrect: true },
          { Answer: "Redditch", isCorrect: false },
          { Answer: "Wolverhampton", isCorrect:false},
        ],
      },

      {
        Questions: "What is Niall middle name?",
        Answerbox: [
          { Answer: "James", isCorrect: true },
          { Answer: "Charles", isCorrect: false },
          { Answer: "William", isCorrect: false },
          { Answer: "Louise", isCorrect: false },
          { Answer: "Edward", isCorrect: false },
        ],
      },

      

      {
        Questions: "What did Niall Horan sing on X Factor?",
        Answerbox: [
          { Answer: "Let Me Love You", isCorrect: false },
          { Answer: "Cry Me a River", isCorrect: false },
          { Answer: "So Sick", isCorrect: true },
          { Answer: "Hey There Delilah", isCorrect: false },
          { Answer: "Hey, Soul Sister", isCorrect: false },
        ],
      },



      {
        Questions: "What was the name of Niall's first solo single? ",
        Answerbox: [
          { Answer: "This Town", isCorrect: true },
          { Answer: "Slow Hands", isCorrect:false },
          { Answer: "Paper Houses", isCorrect: false },
          { Answer: "Seeing Blind", isCorrect: false },
          { Answer: "Too much to ask", isCorrect: false },
        ],
      },

      {
        Questions: "How many albums does Niall have?",
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
          { Answer: "Flicker", isCorrect: false },
          { Answer: "This Town", isCorrect: false },
          { Answer: "Niall Horan", isCorrect: false },
          { Answer: "All this Time", isCorrect: false },
          { Answer: "Heartbreak Weather", isCorrect: true },
        ],
      },

      {
        Questions: "How many awards did Niall won?",
        Answerbox: [
          { Answer: "5", isCorrect: false },
          { Answer: "8", isCorrect: false },
          { Answer: "10", isCorrect: false },
          { Answer: "18", isCorrect: false },
          { Answer: "20 ", isCorrect: true },
        ],
      },

      {
        Questions: "How did Niall donate to charity?",
        Answerbox: [
          { Answer: "lots of money ", isCorrect: false },
          { Answer: "waxed his legs", isCorrect: true },
          { Answer: "walked", isCorrect: false },
          { Answer: "cut his hair", isCorrect: false },
          { Answer: "ran", isCorrect: false },
        ],
      },

      {
        Questions: "What is Niall's nickname?",
        Answerbox: [
          { Answer: "Ni ni", isCorrect: false },
          { Answer: "Nialllll", isCorrect: false },
          { Answer: "Nialler", isCorrect: true },
          { Answer: "james", isCorrect: false },
          { Answer: "Who's niall!?", isCorrect: false },
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
        if (nextQuestions < Niallbox.length) {
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
                Your score is {score} / {Niallbox.length}
              </h2>
              <button onClick={refreshPage}>Restart Quiz</button>
              
              
            
            </div>
          ) : (
            <>
          
    
              <div className="question-section">
                <div className="question-count">
                  <span>{currentQuestions + 1}</span>/{Niallbox.length}
                </div>
                <div className="question-text">
                  <h2> {Niallbox[currentQuestions].Questions}</h2>
                </div>
              </div>
    
              <div className="answer-section">
                {Niallbox[currentQuestions].Answerbox.map((answer) => (
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

   

    export default Niall;