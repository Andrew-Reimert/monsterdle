import React from "react";
import MonsterSearch from "./monsearch";

export default function Home() {
  return (
    // This is the page for when the game is started
    <main className="flex flex-col items-center">
      <div className="w-xl">
        <h1 className="text-4xl text-center m-4">
          <a href="./">MONSTERDLE</a>
        </h1>

        <div className="home-container">
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
