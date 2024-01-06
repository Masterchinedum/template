import React, { useState } from "react";
import BoxComponent from "./BoxComponent";
import boxes from "./boxes";

export default function App() {
    const [boxStates, setBoxStates] = useState(boxes);

    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
     */

    const thisBoxes = boxStates.map((box) => (
        <BoxComponent 
        key={box.id} 
        on={box.on} 
        onClick={() => handleBoxClick(box.id)}
        />
    ));

    /**
     * Challenge part 2:
     * When a box is clicked, toggle its state (on/off)
     * and update the component to reflect the changes
     */
    const handleBoxClick = (id) => {
        setBoxStates((prevStates) =>
            prevStates.map((box) =>
                box.id === id ? { ...box, on: !box.on } : box
            )
        );
    };

    return (
        <main>
            <h1>Boxes will go here</h1>
            <div className="boxContainer">{thisBoxes}</div>
        </main>
    );
}
