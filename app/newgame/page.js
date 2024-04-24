import React from "react";
import { Inter } from "next/font/google";
import Monster from "./monster";
import MonsterGuess from "./monsterguess";
import MonsterSearch from "./monsearch";

export default function Home() {
  return (
    // This is the page for when the game is started
    <main className="flex flex-col items-center">
      <div className="w-xl">
        <h1 className="text-4xl text-center m-4">
          <a href="./">MONSTERDLE</a>
        </h1>

        <div className="flex items-center flex-col w-fit p-12 mt-8 border-4 rounded">
          <div className="p-4"></div>
          <div className="p-4">
            <MonsterSearch />
          </div>
          <div>
            <a className="button" href="./newgame">
              Again!
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
