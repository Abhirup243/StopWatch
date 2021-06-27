import react, { useState } from "react";
import Title from "./Title"

const Stopwatch = () => {
  let [time, setTime] = useState(0);
  let [control, setControl] = useState(null);
  let [mins, setMins] = useState(0);
  let [hrs, setHrs] = useState(0);

  react.useEffect(() => {
    if (time % 60 === 0 && time !== 0) {
      setMins((mins += 1));
    }
    if (mins % 60 === 0 && mins !== 0 && time % 60 === 0) {
      setHrs((hrs += 1));
    }
  }, [time]);

  let StartTimer = () => {
    setControl(
      setInterval(() => {
        setTime((time += 1));
      }, 1000)
    );
  };

  let StopTimer = () => {
    clearInterval(control);
  };

  let ResetTimer = () => {
    StopTimer();
    setTime(0);
    setMins(0);
    setHrs(0);
    
  };
  return (
    <div className="container">
      <Title />
      <div className="timer">
        {hrs < 10 ? "0" + hrs : hrs}:{("0" + Math.floor(mins % 60)).slice(-2)}:
        {("0" + Math.floor(time % 60)).slice(-2)}
      </div>
      <button onClick={StartTimer}>Start</button>
      <button onClick={StopTimer}>Stop</button>
      <button onClick={ResetTimer}>Reset</button>
    </div>
  );
};

export default Stopwatch;
