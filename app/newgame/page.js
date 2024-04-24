"use client"
import React from "react";
import { Inter } from 'next/font/google'
import Monster from "./monster";
import MonsterGuess from "./monsterguess";
import MonsterSearch from "./monsearch";
import { useState } from "react";


export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState("");


  return ( // This is the page for when the game is started
    <main className="flex flex-col items-center">
      <div className="w-xl">
        <h1 className="text-4xl text-center m-4"><a href="./">MONSTERDLE</a></h1>
      
        <div className="flex items-center flex-col w-full p-12 mt-8 border-4 rounded">
          <div className="p-4">
            <Monster/>
          </div>
          <div className="p-4">
            <MonsterSearch onSelect={setSelectedIndex}/>
          </div>
        </div>
          <div className="p-4">
            <MonsterGuess selectedIndex={selectedIndex}/>
          </div>
      </div>
    </main>
  );
}
