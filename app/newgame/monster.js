"use client";
import { useState, useEffect } from "react";
import monstersData from "./monsters.json";

const StatDisplay = ({ label, guessValue, monsterValue }) => {
  const isCorrect = guessValue === monsterValue;

  return (
    <div className={`sum-text ${isCorrect ? "sum-correct" : "sum-wrong"}`}>
      {guessValue}
    </div>
  );
};

export default function Monster({ guess }) {
  const [monst, setMonst] = useState("");
  const [isCorrectGuess, setIsCorrectGuess] = useState(false);

  const loadMonster = async () => {
    const newMonster = await fetchMonster();
    setMonst(newMonster);
  };

  useEffect(() => {
    if (monst && guess) {
      if (guess.name === monst.name) {
        console.log("You guessed correctly!");
      } else {
        console.log("Wrong guess. Try again!");
      }
    }
  }, [monst, guess]);

  useEffect(() => {
    loadMonster();
  }, []);

  useEffect(() => {
    if (monst && guess) {
      const isCorrect =
        guess.name === monst.name &&
        guess.size === monst.size &&
        guess.type === monst.type &&
        guess.hit_points === monst.hit_points &&
        guess.strength === monst.strength &&
        guess.dexterity === monst.dexterity &&
        guess.constitution === monst.constitution &&
        guess.intelligence === monst.intelligence &&
        guess.wisdom === monst.wisdom &&
        guess.charisma === monst.charisma;

      setIsCorrectGuess(isCorrect);
    }
  }, [monst, guess]);

  return (
    <div>
      <div className="sum-container">
        <StatDisplay guessValue={guess.name} monsterValue={monst.name} />
        <StatDisplay guessValue={guess.size} monsterValue={monst.size} />
        <StatDisplay guessValue={guess.type} monsterValue={monst.type} />
        <StatDisplay
          guessValue={guess.hit_points}
          monsterValue={monst.hit_points}
        />
        <StatDisplay
          guessValue={guess.strength}
          monsterValue={monst.strength}
        />
        <StatDisplay
          guessValue={guess.dexterity}
          monsterValue={monst.dexterity}
        />
        <StatDisplay
          guessValue={guess.constitution}
          monsterValue={monst.constitution}
        />
        <StatDisplay
          guessValue={guess.intelligence}
          monsterValue={monst.intelligence}
        />
        <StatDisplay guessValue={guess.wisdom} monsterValue={monst.wisdom} />
        <StatDisplay
          guessValue={guess.charisma}
          monsterValue={monst.charisma}
        />
      </div>
      {isCorrectGuess && <div className="win-box">Correct! You Win!</div>}
    </div>
  );
}

async function fetchMonster() {
  const { monsters } = monstersData;
  const randomIndex = Math.floor(Math.random() * monsters.length);
  const randomMon = monsters[randomIndex].index;

  const response = await fetch(
    "https://www.dnd5eapi.co/api/monsters/" + randomMon
  );
  const monster = await response.json();
  return monster;
}
