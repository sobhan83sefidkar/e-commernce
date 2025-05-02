import React, { useState, useEffect } from 'react';

function CountDown() {
    // Initial time in seconds (1 hour)
    const initialTime = 180000;
    const [timeRemaining, setTimeRemaining] = useState(initialTime);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimeRemaining((prevTime) => {
                if (prevTime === 0) {
                    clearInterval(timerInterval);
                    // Perform actions when the timer reaches zero
                    console.log('Countdown complete!');
                    return 0;
                } else {
                    return prevTime - 1;
                }
            });
        }, 1000);

        // Cleanup the interval when the component unmounts
        return () => clearInterval(timerInterval);
    }, []); // The empty dependency array ensures the effect runs only once on mount

    // Convert seconds to hours, minutes, and seconds
    const day = Math.floor(timeRemaining / 86400)
    const hours = Math.floor((timeRemaining % 86400) / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;
    return (
        <div className=' flex flex-row-reverse gap-1 bg-[rgba(168,168,168,0.381)] rounded-md text-sm'>
            <div className=' w-11 flex justify-center items-center flex-col'>
                <span>{day}</span>
                <span>روز</span>
            </div>
            <div className=' w-11 flex justify-center items-center flex-col'>
                <span>{hours}</span>
                <span>ساعت</span>
            </div>
            <div className=' w-11 flex justify-center items-center flex-col'>
                <span>{minutes}</span>
                <span>دقیقه</span>
            </div>
            <div className=' w-11 flex justify-center items-center flex-col'>
                <span>{seconds}</span>
                <span>ثانیه</span>
            </div>
        </div>
    );
}

export default CountDown;