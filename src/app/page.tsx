
import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const countdownDate = new Date('2024-12-31T23:59:59'); // Set your desired date

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const difference = countdownDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(intervalId);
      } else {
        const daysRemaining = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hoursRemaining = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesRemaining = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const secondsRemaining = Math.floor((difference % (1000 * 60)) / 1000);

        setDays(daysRemaining);
        setHours(hoursRemaining);
        setMinutes(minutesRemaining);
        setSeconds(secondsRemaining);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Countdown Timer</h1>
      <div>
        {days} days {hours} hours {minutes} minutes {seconds} seconds
      </div>
    </div>
  );
};

export default CountdownTimer;
```
