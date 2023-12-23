// // components/CountdownTimer.js

// import dynamic from 'next/dynamic';
// import { useEffect, useState } from 'react';

// const CountdownTimer = ({ targetDate }) => {
//   const calculateTimeLeft = () => {
//     const difference = +new Date(targetDate) - +new Date();
//     let timeLeft = {};

//     if (difference > 0) {
//       timeLeft = {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       };
//     }

//     return timeLeft;
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearTimeout(timer);
//   });

//   const hasTimeLeft = Object.values(timeLeft).some((value) => value > 0);

//   const timerComponents = [];

//   Object.keys(timeLeft).forEach((interval) => {
//     if (!timeLeft[interval]) {
//       return;
//     }
//     let value = timeLeft[interval];
//     if (typeof value === 'number' && value < 10) {
//       value = `0${value}`;
//     }

//     timerComponents.push(
//       <div
//         key={interval}
//         className="flex flex-col w-[5rem] h-[5rem] bg-white text-black justify-center items-center rounded-xl my-8 "
//       >
//         <span className="text-2xl font-bold text-yellow-500 ">{value}</span>
//         <span className="">{interval}</span>
//       </div>
//     );
//   });

//   return (
//     <div className="flex gap-4 ">
//       {timerComponents.length ? timerComponents : <span>Time's up!</span>}
//     </div>
//   );
// };

// export default dynamic(() => Promise.resolve(CountdownTimer), {
//   ssr: false,
// });

// components/CountdownTimer.js

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeUp, setTimeUp] = useState(false);
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    if (
      !timeLeft.days &&
      !timeLeft.hours &&
      !timeLeft.minutes &&
      !timeLeft.seconds
    ) {
      timeLeft = null;
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  const renderTimeComponent = (value, label) => (
    <div
      key={label}
      className="flex flex-col w-[5rem] h-[5rem] bg-white text-black justify-center items-center rounded-xl my-8 "
    >
      <span className="text-2xl font-bold text-yellow-500 ">
        {value < 10 ? `0${value}` : value}
      </span>
      <span>{label}</span>
    </div>
  );

  // Render each unit with its value, regardless of its value being zero or not
  if (timeLeft != null) {
    timerComponents.push(renderTimeComponent(timeLeft.days, 'days'));
    timerComponents.push(renderTimeComponent(timeLeft.hours, 'hours'));
    timerComponents.push(renderTimeComponent(timeLeft.minutes, 'minutes'));
    timerComponents.push(renderTimeComponent(timeLeft.seconds, 'seconds'));
  }

  return (
    <div className="flex gap-4 ">
      {timeLeft !== null ? (
        timerComponents
      ) : (
        <span className=" ">Time's up!</span>
      )}
    </div>
  );
};

export default dynamic(() => Promise.resolve(CountdownTimer), {
  ssr: false,
});
