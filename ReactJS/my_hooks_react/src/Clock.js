import React, { useEffect, useState } from "react";

const Clock = () => {
  // Create a function with Hooks
  const [time, setTime] = useState(new Date());

  function thick() {
    setTime(new Date());
  }

  useEffect(() => {
    let timeID = setInterval(() => {
      thick();
    }, 1000);

    return () => {
      clearInterval(timeID);
    };
  });

  return (
    <div className="my-2">
      <h1>Current time : {time.toLocaleTimeString()}</h1>
    </div>
  );
};

export default Clock;
