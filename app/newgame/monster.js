"use client"
import { useState, useEffect } from "react";
import monstersData from './monsters.json';


export default function Monster() {
    const [monst, setMonst] = useState("");
    // const loadImageUrl = async () => {
    //     const newImageUrl = await fetchImageUrl();
    //     setImageUrl(newImageUrl);
    // }

    const loadMonster = async () => {
        const newMonster = await fetchMonster();
        setMonst(newMonster);
    };

    useEffect (() => {
        loadMonster();
    }, []);

    return (
        <div>
            {monst.name}
            <img src={"https://www.dnd5eapi.co" + monst.image} alt={monst.index} />
            <div className="flex items-center p-4 mt-6">
            </div>
        </div>

    );
}

async function fetchMonster() {
    const { monsters } = monstersData;
    const randomIndex = Math.floor(Math.random() * monsters.length);
    const randomMon = (monsters[randomIndex].index);

    const response = await fetch("https://www.dnd5eapi.co/api/monsters/" + randomMon);
    const monster = await response.json();
    return monster;
}



// Things that each monster has in common that doesn't give away the answer:
// size, type, armor_class, hit_points, speed, strength, dexterity, constitution, intelligence, wisdom, charisma, legendary_actions