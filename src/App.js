import "./styles.css";
import { useEffect, useState } from "react";
import Tank from "./Tank";
import { TANKS_DATA } from "./constant";

export default function App() {
  const initalData = [15, 12];
  const [tanks, setTanks] = useState(initalData);
  const [direction, setDirection] = useState(0);
  useEffect(() => {
    if (direction) {
      const timerID = setTimeout(() => {
        const newTanks = [...tanks];
        if (
          newTanks[0] + direction >= 0 &&
          newTanks[0] + direction <= TANKS_DATA[0].volume &&
          newTanks[1] - direction >= 0 &&
          newTanks[1] - direction <= TANKS_DATA[1].volume
        ) {
          newTanks[0] += direction;
          newTanks[1] -= direction;
          setTanks(newTanks);
      }

      }, 1000);
      return () => {
        clearTimeout(timerID);
      };
    }
  }, [direction, tanks]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="ground">
        {tanks.map((tanksize, index) => (
          <Tank
            key={`Tank${index}`}
            tank={tanksize}
            index={index}
            setDirection={setDirection}
          />
        ))}
      </div>
    </div>
  );
}
