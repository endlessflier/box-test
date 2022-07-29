import "./styles.css";
import { useEffect, useState } from "react";
import Tank from "./Tank";

export default function App() {
  const initalData = [
    { button: ">>>>", dir: -1, volume: 25, current: 15 },
    { button: "<<<<", dir: 1, volume: 25, current: 12 }
  ];
  const [tanks, setTanks] = useState(initalData);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (direction) {
      const timerID = setTimeout(() => {
        const newTanks = [{ ...tanks[0] }, { ...tanks[1] }];
        if (
          newTanks[0].current + direction >= 0 &&
          newTanks[0].current + direction <= newTanks[0].volume &&
          newTanks[1].current - direction >= 0 &&
          newTanks[1].current - direction <= newTanks[1].volume
        ) {
          newTanks[0].current += direction;
          newTanks[1].current -= direction;
        }

        setTanks(newTanks);
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
        {tanks.map((tank, index) => (
          <Tank
            key={index}
            tank={tank}
            direction={direction}
            setTanks={setTanks}
            setDirection={setDirection}
          />
        ))}
      </div>
    </div>
  );
}
