import React from 'react';
import HomeCards from "./HomeCards";
import "../compoStyles/FinanceTopics.css";

import budget from "../assets/budget.png";
import comparison from "../assets/comparison.png"; // Corrected typo from "camparison" to "comparison"
import saving from "../assets/money-bag.png";
import retirement from "../assets/pension.png";
import investment from "../assets/portfolio.png";
import tax from "../assets/tax.png";
import personal from "../assets/user.png";
import bank from "../assets/transaction.png";

const Topics = [
  {
    topic: "Budget",
    imageUrl: budget // Removed curly braces
  },
  {
    topic: "Savings",
    imageUrl: saving // Removed curly braces
  },
  {
    topic: "Investment",
    imageUrl: investment // Removed curly braces
  },
  {
    topic: "Tax",
    imageUrl: tax // Removed curly braces
  },
  {
    topic: "Bank",
    imageUrl: bank // Removed curly braces
  },
  {
    topic: "Finance",
    imageUrl: personal // Removed curly braces
  },
  {
    topic: "Comparisons", // Corrected typo from "Comparsions" to "Comparisons"
    imageUrl: comparison // Removed curly braces
  },
  {
    topic: "Retirement",
    imageUrl: retirement // Removed curly braces
  },
];

const FinanceTopics = () => {
  return (
    <div className="finance-topics">
      {Topics.map((topic, index) => (
        <HomeCards key={index} {...topic} />
      ))}
    </div>
  );
}

export default FinanceTopics;
