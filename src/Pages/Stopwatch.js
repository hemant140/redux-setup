import React, { useState, useEffect } from 'react'
import TimerDisplay from '../components/TimerDisplay'
import StopwatchBtn from '../components/StopwatchBtn'

function Stopwatch() {
    const [timerSeconds, setTimerSeconds] = useState(0)
    const [time, setTime] = useState(0)
    const [timerMinutes, setTimerMinutes] = useState(0)
    const [clockBtn, setClockBtn] = useState(false);

    useEffect(() => {
        let stopWatch;
        if (clockBtn) {
            stopWatch = setInterval(() => {
                // setTimerSeconds(previous => {
                //     if (previous === 59) {
                //         setTimerMinutes(prev => prev + 1);
                //         return 0;
                //     } else {
                //         return previous + 1;
                //     }
                // });
                setTime(prev => prev + 1)
            }, 1000)
        } else {
            clearInterval(stopWatch)
        }
        return () => clearInterval(stopWatch)
    }, [clockBtn])


    const handleStartPause = () => {
        setClockBtn(!clockBtn)
    }

    const handleStop = () => {
        setClockBtn(false);
        setTimerSeconds(0);
        setTimerMinutes(0);
        setTime(0)
    }


    return (
        <div className="main-page-Container">
            <div className="header-h1">
                <h1 >Stopwatch</h1>
            </div>

            <div className='stopwatch-main'>
                <div className="stopwatch-content">
                    <TimerDisplay timerSeconds={timerSeconds} timerMinutes={timerMinutes} time={time} />
                    <StopwatchBtn clockBtn={clockBtn} startBtn={handleStartPause} stopBtn={handleStop} />
                </div>

            </div>
        </div>
    )
}

export default Stopwatch
