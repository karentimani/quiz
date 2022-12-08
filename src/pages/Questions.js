import React from "react";
import { useState } from "react";
import "./style.css";



const Questions = () => {
  var Questionbox = [
    {
      Question: "When was One Direction formed?",
      AnswerText: [
        { Answer: "June 23 2011", isCorrect: false },
        { Answer: "July 23 2010", isCorrect: true },
        { Answer: "March 15 2010", isCorrect: false },
        { Answer: "March 24 2011", isCorrect: false },
        { Answer: "June 16 2011", isCorrect: false },
      ],
    },

    {
      Question:
        "What famous singer suggested that the boys should form the band?",
      AnswerText: [
        { Answer: "Shania Twain", isCorrect: false },
        { Answer: "Nicole Scherzinger", isCorrect: true },
        { Answer: "Simon Cowell", isCorrect: false },
        { Answer: "Beyonce", isCorrect: false },
        { Answer: "Justin Bieber ", isCorrect: false },
      ],
    },

    {
      Question: "What place did One Direction come in the X Factor?",
      AnswerText: [
        { Answer: "1", isCorrect: false },
        { Answer: "2", isCorrect: false },
        { Answer: "3", isCorrect: true },
        { Answer: "4", isCorrect: false },
      ],
    },

    {
      Question: "Who came up with the name One Direction?",
      AnswerText: [
        { Answer: "Louis", isCorrect: false },
        { Answer: "Zayn", isCorrect: false },
        { Answer: "Liam", isCorrect: false },
        { Answer: "Niall", isCorrect: false },
        { Answer: "Harry", isCorrect: true },
      ],
    },

    {
      Question: "Who is the oldest member of the band?",
      AnswerText: [
        { Answer: "Harry Styles", isCorrect: false },
        { Answer: "Louis Tomlinson", isCorrect: true },
        { Answer: "Niall Horan", isCorrect: false },
        { Answer: "Liam Payne", isCorrect: false },
        { Answer: "Zayn Malik", isCorrect: false },
      ],
    },

    {
      Question: "How many albums does One Direction have?",
      AnswerText: [
        { Answer: "2", isCorrect: false },
        { Answer: "3", isCorrect: false },
        { Answer: "4", isCorrect: false },
        { Answer: "5", isCorrect: true },
        { Answer: "6", isCorrect: false },
      ],
    },

    {
      Question: "What is the name of the band's first album?",
      AnswerText: [
        { Answer: "Take Me Home", isCorrect: false },
        { Answer: "Four", isCorrect: false },
        { Answer: "Up All Night", isCorrect: true },
        { Answer: "Made in the A.M.", isCorrect: false },
        { Answer: "Midnight Memories", isCorrect: false },
      ],
    },

    {
      Question:
        "What Nickelodeon television show did One Direction guest star on?",
      AnswerText: [
        { Answer: "Victorious", isCorrect: false },
        { Answer: "Sam & Cat", isCorrect: false },
        { Answer: "Simon Cowell", isCorrect: false },
        { Answer: "Henry Danger", isCorrect: false },
        { Answer: "iCarly", isCorrect: true },
      ],
    },

    {
      Question: "When did zayn malik leave the band?",
      AnswerText: [
        { Answer: "March 25 2015", isCorrect: true },
        { Answer: "May 8 2016", isCorrect: false },
        { Answer: "September 16 2015", isCorrect: false },
        { Answer: "December 18 2016", isCorrect: false },
        { Answer: "None of the above", isCorrect: false },
      ],
    },

    {
      Question: "When did one direction announce their hiatus?",
      AnswerText: [
        { Answer: "December 2015", isCorrect: false },
        { Answer: "March 2016", isCorrect: false },
        { Answer: "August 2015", isCorrect: true },
        { Answer: "December 2016", isCorrect: false },
        { Answer: "February 2016", isCorrect: false },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  

  const handleAnswerResponse = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Questionbox.length) {
      setCurrentQuestion(nextQuestion);
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
            Your score is {score} / {Questionbox.length}
          </h2>
          <button onClick={refreshPage}>Restart Quiz</button>
          
          
        
        </div>
      ) : (
        <>
      

          <div className="question-section">
            <div className="question-count">
              <span>{currentQuestion + 1}</span>/{Questionbox.length}
            </div>
            <div className="question-text">
              <h2> {Questionbox[currentQuestion].Question}</h2>
            </div>
          </div>

          <div className="answer-section">
            {Questionbox[currentQuestion].AnswerText.map((answer) => (
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
export default Questions;
