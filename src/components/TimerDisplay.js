
function TimerDisplay({ timerMinutes, timerSeconds }) {

    return (
        <div>
            <h1 className='displayTimer'>
                {timerMinutes < 10 ? '0' + timerMinutes : timerMinutes}:{timerSeconds < 10 ? '0' + timerSeconds : timerSeconds}
            </h1>
        </div>
    )
}

export default TimerDisplay
