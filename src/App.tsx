import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import { useState } from "react";
import CategorySelector from "./components/CategorySelector/CategorySelector";

const App = () => {
  const [quizData, setQuizData] = useState(null);
  const [score, setScore] = useState<number>(0);
  const [maxScore, setMaxScore] = useState<number>(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);

  const handleQuizStart = (data: any) => {
    setQuizData(data);
    setIsQuizCompleted(false);
    setScore(0);
  };

  return (
    <div>
      {isQuizCompleted ? (
        <div>
          <h1>The end!</h1>
          <p>
            Your score is {score} of {maxScore}
          </p>
        </div>
      ) : quizData ? (
        <div>
          <h1>The quiz.</h1>
          <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
            {JSON.stringify(quizData, null, 2)}
          </pre>
        </div>
      ) : (
        <CategorySelector handleQuizStart={handleQuizStart} />
      )}
    </div>
  );
};

export default App;
