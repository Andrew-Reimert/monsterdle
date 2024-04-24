"use client";
import { useState, useEffect } from "react";
import monstersData from "./monsters.json";

const StatDisplay = ({ label, guessValue, monsterValue }) => {
  let isCorrect;
  let arrow;
  if (label === "NAME" || label === "TYPE" || label === "SIZE") {
    isCorrect = guessValue === monsterValue;
  } else {
    isCorrect = parseInt(guessValue) >= parseInt(monsterValue);
    arrow = isCorrect ? "↓" : "↑";
    if (parseInt(guessValue) === parseInt(monsterValue)) {
      arrow = null;
    }
  }

  return (
    <div className={`sum-text ${isCorrect ? "sum-correct" : "sum-wrong"}`}>
      {guessValue} {arrow && <span className="arrow">{arrow}</span>}
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
    //please forgive the yanderedev code
    if (monst && guess) {
      const isCorrect =
        guess.name === monst.name &&
        guess.size === monst.size &&
        guess.type === monst.type &&
        parseInt(guess.hit_points) >= parseInt(monst.hit_points) &&
        parseInt(guess.strength) >= parseInt(monst.strength) &&
        parseInt(guess.dexterity) >= parseInt(monst.dexterity) &&
        parseInt(guess.constitution) >= parseInt(monst.constitution) &&
        parseInt(guess.intelligence) >= parseInt(monst.intelligence) &&
        parseInt(guess.wisdom) >= parseInt(monst.wisdom) &&
        parseInt(guess.charisma) >= parseInt(monst.charisma);
      setIsCorrectGuess(isCorrect);
    }
  }, [monst, guess]);

  return (
    <div className="flex flex-col items-center">
      <div className="sum-container">
        <StatDisplay
          label="NAME"
          guessValue={guess.name}
          monsterValue={monst.name}
        />
        <StatDisplay
          label="SIZE"
          guessValue={guess.size}
          monsterValue={monst.size}
        />
        <StatDisplay
          label="TYPE"
          guessValue={guess.type}
          monsterValue={monst.type}
        />
        <StatDisplay
          label="HP"
          guessValue={guess.hit_points}
          monsterValue={monst.hit_points}
        />
        <StatDisplay
          label="STR"
          guessValue={guess.strength}
          monsterValue={monst.strength}
        />
        <StatDisplay
          label="DEX"
          guessValue={guess.dexterity}
          monsterValue={monst.dexterity}
        />
        <StatDisplay
          label="CON"
          guessValue={guess.constitution}
          monsterValue={monst.constitution}
        />
        <StatDisplay
          label="INT"
          guessValue={guess.intelligence}
          monsterValue={monst.intelligence}
        />
        <StatDisplay
          label="WIS"
          guessValue={guess.wisdom}
          monsterValue={monst.wisdom}
        />
        <StatDisplay
          label="CHAR"
          guessValue={guess.charisma}
          monsterValue={monst.charisma}
        />
      </div>
      {isCorrectGuess && (
        <div className="win-box">The Monster was {monst.name} You Win!</div>
      )}
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
  console.log(monster.name);
  return monster;
}
