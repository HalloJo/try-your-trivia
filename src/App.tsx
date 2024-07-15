import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import { useState } from "react";

const App = () => {
  const [quizData, setQuizData] = useState(null);
  const [score, setScore] = useState<number>(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);

  return (
    <div>
      {isQuizCompleted ? (
        <div>
          <h1>The end!</h1>
          <p>Your score is ... of ...</p>
        </div>
      ) : quizData ? (
        <div>
          <h1>The quiz.</h1>
        </div>
      ) : (
        <div>
          <h1>Select category and level</h1>
        </div>
      )}
    </div>
  );
};

export default App;
