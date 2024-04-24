import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="max-w-xl">
        <h1 className="text-4xl text-center">
          <a href="./">MONSTERDLE</a>
        </h1>

        <div className="home-container">
          <h2 className="text-2xl p-4 m-4">Welcome to the Monsterdle!</h2>
          <p className="text-center">
            This game is designed to test your knowledge of all
            monster/creatures in Dungeons and Dragons 5e! Use a monsters stats,
            size, hit points, and more to figure out the correct answer!
          </p>

          <div className="flex justify-around">
            <div className="w-40 text-center m-3 p-3 border-2 bg-slate-500 hover:bg-slate-400 rounded">
              <a href="/newgame">Start</a>
            </div>
            <div className="w-40 text-center m-3 p-3 border-2 bg-slate-500 hover:bg-slate-400 rounded">
              <a href="/">About</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
