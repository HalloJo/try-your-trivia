import reactLogo from "./assets/react.svg";
import "./App.scss";
import { useState } from "react";
import CategorySelector from "./components/CategorySelector/CategorySelector";
import Quiz from "./components/Quiz/Quiz";
import Result from "./components/Result/Result";

const App = () => {
  const [quizData, setQuizData] = useState(null);
  const [score, setScore] = useState<number>(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);

  const handleQuizStart = (data: any) => {
    setQuizData(data);
    setIsQuizCompleted(false);
    setScore(0);
  };

  const handleQuizComplete = (finalScore: number) => {
    setScore(finalScore);
    setIsQuizCompleted(true);
  };

  const handleReset = () => {
    setScore(0);
    setQuizData(null);
    setIsQuizCompleted(false);
  };

  return (
    <div>
      {isQuizCompleted ? (
        <Result score={score} handleReset={handleReset} />
      ) : quizData ? (
        <Quiz quizData={quizData} handleQuizComplete={handleQuizComplete} />
      ) : (
        <CategorySelector handleQuizStart={handleQuizStart} />
      )}
    </div>
  );
};

export default App;
