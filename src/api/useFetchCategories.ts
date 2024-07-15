import { useEffect, useState } from "react";
import { Category } from "../types/types";

export const useFetchCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState<string>("");

  const CATEGORIES_URL = "https://opentdb.com/api_category.php";

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(CATEGORIES_URL);
        const data = await response.json();
        setCategories(data.trivia_categories);
      } catch (error) {
        setError("Failed to fetch categories");
      }
    };

    fetchCategories();
  }, []);

  return {
    error,
    categories,
  };
};
