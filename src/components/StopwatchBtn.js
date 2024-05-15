
function StopwatchBtn({ clockBtn, startBtn, stopBtn }) {

    return (
        <div>
            <button className='startbtn' onClick={startBtn}>
                {clockBtn ? "Pause" : "Start"}
            </button>
            <button className='startbtn' style={{ backgroundColor: "red" }} onClick={stopBtn}>Stop</button>
        </div>
    )
}

export default StopwatchBtn
