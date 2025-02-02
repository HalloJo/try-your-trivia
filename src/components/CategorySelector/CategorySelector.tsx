import React, { useState } from "react";
import "./CategorySelector.scss";
import { useFetchCategories } from "../../api/useFetchCategories";
import { Category } from "../../types/types";
import { difficulties } from "../../data/difficulties";

const CategorySelector = ({ handleQuizStart }: any) => {
  const [category, setCategory] = useState<number>();
  const [difficulty, setDifficulty] = useState<string>("");

  const { error, categories } = useFetchCategories();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await fetch(
      `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`
    );
    const data = await response.json();
    handleQuizStart(data.results);
  };

  return (
    <form onSubmit={handleSubmit} className="category__form">
      <div className="category__container">
        <div>
          <h2 className="category__heading">First, select your category:</h2>
          {error && <p>Whoops.. {error} </p>}
          <div className="category__list">
            {categories.map((category: Category) => (
              <button
                key={category.id}
                value={category.id}
                type="button"
                onClick={() => setCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        {category && (
          <div>
            <h2 className="category__heading">Then, select a difficulty:</h2>
            <div className="category__list">
              {difficulties.map((difficulty, index) => (
                <button
                  key={index}
                  value={difficulty}
                  type="button"
                  onClick={() => setDifficulty(difficulty)}
                >
                  {difficulty}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      {category && difficulty && (
        <button className="category__button" type="submit">
          Start Quiz
        </button>
      )}
    </form>
  );
};

export default CategorySelector;
