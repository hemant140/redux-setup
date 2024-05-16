
function TimerDisplay({ timerMinutes, timerSeconds, time }) {

    // function formatTime(time) {

    //     let minutes = Math.floor(time / 60);
    //     let seconds = time % 60;
    //     return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    // }

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = Math.floor(time % 60);

        const formattedHours = `${hours < 10 ? '0' : ''}${hours}`;
        const formattedMinutes = `${minutes < 10 ? '0' : ''}${minutes}`;
        const formattedSeconds = `${seconds < 10 ? '0' : ''}${seconds}`;

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    };


    return (
        <div>
            <h1 className='displayTimer'>
                {/* {timerMinutes < 10 ? '0' + timerMinutes : timerMinutes}:{timerSeconds < 10 ? '0' + timerSeconds : timerSeconds} */}
                {formatTime(time)}
            </h1>
        </div>
    )
}

export default TimerDisplay
