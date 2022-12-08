import React from "react";
import { useState } from "react";
import "./style.css";

const Zayn = () => {
    var Zaynbox = [

      {
        Questions: "When was Zayn Malik born?",
        Answerbox: [
          { Answer: "January 16", isCorrect: false },
          { Answer: "September 13", isCorrect: false},
          { Answer: "January 12", isCorrect: true },
          { Answer: "December 24", isCorrect: false },
        ],
      },

      {
        Questions: "Where was Zayn born?",
        Answerbox: [
          { Answer: "Bradford", isCorrect: true },
          { Answer: "Doncaster", isCorrect: false},
          { Answer: "Mullingar", isCorrect: false },
          { Answer: "Redditch", isCorrect: false },
          { Answer: "Wolverhampton", isCorrect:false},
        ],
      },

      {
        Questions: "What is Zayn middle name?",
        Answerbox: [
          { Answer: "James", isCorrect: false },
          { Answer: "Javadd", isCorrect: true },
          { Answer: "William", isCorrect: false },
          { Answer: "Louise", isCorrect: false },
          { Answer: "Edward", isCorrect: false },
        ],
      },

      

      {
        Questions: "What did Zayn sing on X Factor?",
        Answerbox: [
          { Answer: "Let Me Love You", isCorrect: true },
          { Answer: "Cry Me a River", isCorrect: false },
          { Answer: "So Sick", isCorrect: false },
          { Answer: "Hey There Delilah", isCorrect: false },
          { Answer: "Hey, Soul Sister", isCorrect: false },
        ],
      },



      {
        Questions: "What was the name of Zayn's first solo single? ",
        Answerbox: [
          { Answer: "Dusk till Dawn", isCorrect: false },
          { Answer: "Mind of Mine", isCorrect:false },
          { Answer: "lUcOzAdE", isCorrect: false },
          { Answer: "fOol fOr YoU", isCorrect: false },
          { Answer: "Pillow Talk", isCorrect: true },
        ],
      },

      {
        Questions: "How many albums does Zayn have?",
        Answerbox: [
          { Answer: "1", isCorrect: false },
          { Answer: "2 ", isCorrect: false },
          { Answer: "3", isCorrect: true },
          { Answer: "4", isCorrect: false },
          { Answer: "5 ", isCorrect: false },
        ],
      },

      {
        Questions: "What is the name of his recent album?",
        Answerbox: [
          { Answer: "Mind of Mine", isCorrect: false },
          { Answer: "Icarus Falls", isCorrect: false },
          { Answer: "Zayn Malik", isCorrect: false },
          { Answer: "Nobody is Listning", isCorrect: true },
          { Answer: "Dusk till Dawn", isCorrect: false },
        ],
      },

      {
        Questions: "What is Zayn's dog's name?",
        Answerbox: [
          { Answer: "Rolo", isCorrect: false },
          { Answer: "Tom", isCorrect: false },
          { Answer: "Boris", isCorrect: true },
          { Answer: "Kaley", isCorrect: false },
          { Answer: "Khai ", isCorrect: false },
        ],
      },

      {
        Questions: "What is the name of Zayn Malik brand?",
        Answerbox: [
          { Answer: "Ornaments ", isCorrect: false },
          { Answer: "Paynt", isCorrect: true },
          { Answer: "Pleasing", isCorrect: false },
          { Answer: "Greyhound", isCorrect: false },
          { Answer: "Piaget", isCorrect: false },
        ],
      },

      {
        Questions: "when did zayn malik launch his brand?",
        Answerbox: [
          { Answer: "2016", isCorrect: false },
          { Answer: "2018", isCorrect: false },
          { Answer: "2019", isCorrect: false },
          { Answer: "2020", isCorrect: false },
          { Answer: "2022", isCorrect: true },
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
        if (nextQuestions < Zaynbox.length) {
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
                Your score is {score} / {Zaynbox.length}
              </h2>
              <button onClick={refreshPage}>Restart Quiz</button>
              
              
            
            </div>
          ) : (
            <>
          
    
              <div className="question-section">
                <div className="question-count">
                  <span>{currentQuestions + 1}</span>/{Zaynbox.length}
                </div>
                <div className="question-text">
                  <h2> {Zaynbox[currentQuestions].Questions}</h2>
                </div>
              </div>
    
              <div className="answer-section">
                {Zaynbox[currentQuestions].Answerbox.map((answer) => (
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

   

    export default Zayn;