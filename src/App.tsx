import "../src/scss/main.scss";
import { useEffect, useState } from "react";
import CategorySelector from "./components/CategorySelector/CategorySelector";
import Quiz from "./components/Quiz/Quiz";
import Result from "./components/Result/Result";
import MobileMessage from "./components/MobileMessage/MobileMessage";

const App = () => {
  const [quizData, setQuizData] = useState(null);
  const [ready, setReady] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);
  const [showMobileMessage, setShowMobileMessage] = useState<boolean>(false);

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

  useEffect(() => {
    if (showMobileMessage) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showMobileMessage]);

  useEffect(() => {
    const checkMobile = () => {
      const isMobile = window.innerWidth < 768;

      setShowMobileMessage(isMobile);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.addEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <>
      <header>
        <p className="logo">Quizia.</p>
      </header>
      {showMobileMessage && <MobileMessage />}
      {!ready && (
        <section>
          <div className="hero">
            <p>
              Welcome to an adventure of knowledge and fun! Embark on a
              thrilling journey with this Quizia app, where curiosity meets
              challenge. Explore diverse categories, from mind-bending trivia to
              pulse-pounding quizzes, and test your wits against the clock. Dive
              deep into questions that will sharpen your mind and leave you
              craving more. Let the quest for knowledge begin – are you ready to
              conquer the ultimate trivia challenge?
            </p>
          </div>
        </section>
      )}
      <section>
        <div className="application">
          {isQuizCompleted ? (
            <Result score={score} handleReset={handleReset} />
          ) : quizData ? (
            <Quiz quizData={quizData} handleQuizComplete={handleQuizComplete} />
          ) : ready ? (
            <CategorySelector handleQuizStart={handleQuizStart} />
          ) : (
            <button
              className="ready"
              type="button"
              onClick={() => setReady(!ready)}
            >
              I am ready!
            </button>
          )}
        </div>
      </section>
      <footer>
        <p className="author">
          Created by <span>Jorik van Ruiswijk</span>
        </p>
      </footer>
    </>
  );
};

export default App;
