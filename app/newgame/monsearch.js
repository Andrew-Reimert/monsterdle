"use client";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { React, useState, useEffect } from "react";
import monstersData from "./monsters.json";
import Monster from "./monster";

export const handleOnSearch = (string) => {
  const monster = monstersData.monsters.find(
    (monster) => monster.name === string
  );
  const result = monster ? monster.index : { index: "NOT FOUND" };
  console.log(result);
  return result;
};

export default function MonsterSearch({ monst }) {
  const [guess, setGuess] = useState("");
  const [selectedMonster, setSelectedMonster] = useState(null);

  const handleOnSelect = (item) => {
    setSelectedMonster(item.name);
  };

  const loadGuess = async () => {
    const newGuess = await fetchGuess(selectedMonster);
    setGuess(newGuess);
  };

  useEffect(() => {
    loadGuess();
  }, [selectedMonster]);

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
      </>
    );
  };

  useEffect(() => {
    if (monst && guess) {
      setIsCorrectGuess(guess.name === monst.name);
    }
  }, [monst, guess]);

  return (
    <div className="items-container">
      <header className="flex flex-col m-2 items-center">
        <div style={{ width: 300 }}>
          <ReactSearchAutocomplete
            items={monstersData.monsters}
            resultStringKeyName="name"
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            showIcon={false}
            placeholder="Search for a monster"
          />
        </div>
      </header>
      <div className="items-container">
        <div className="sum-container">
          <div className="sum-text">NAME</div>
          <div className="sum-text">SIZE</div>
          <div className="sum-text">TYPE</div>
          <div className="sum-text">HP</div>
          <div className="sum-text">STR</div>
          <div className="sum-text">DEX</div>
          <div className="sum-text">CON</div>
          <div className="sum-text">INT</div>
          <div className="sum-text">WIS</div>
          <div className="sum-text">CHAR</div>
        </div>
        <div className="sum-container">
          <Monster guess={guess} />
        </div>
      </div>
    </div>
  );
}

async function fetchGuess(searchString) {
  const result = handleOnSearch(searchString);
  const response = await fetch(
    "https://www.dnd5eapi.co/api/monsters/" + result
  );
  const monGuess = await response.json();
  return monGuess;
}
