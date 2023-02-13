import React, { useState, useEffect } from 'react';


const Stopwatch = ()=>{
    const [hour,setHour] = useState(0);
    const [min,setMin] = useState(0);
    const [sec,setSec] = useState(0);
    const [milliSecond,setMilliSecond] = useState(0);
    const [stop,setStop] = useState(true);

    const onStart =  ()=>{
        setStop(false);
        
    }
    const onStop =  ()=>{
        setStop(true);
    }
    const onReset =  ()=>{
        setHour(0);
        setMin(0);
        setSec(0);
        setMilliSecond(0);
    }

    useEffect(()=>{
        let interval = null;
        if(!stop){
            interval = setInterval(()=>{
                if(min > 59){
                    setHour(hour+1);
                    setMin(0);
                    clearInterval(interval);
                }
                if(sec > 59){
                    setMin(min+1);
                    setSec(0);
                    clearInterval(interval);
                }
                if(milliSecond > 999){
                    setSec(sec+1);
                    setMilliSecond(0);
                    clearInterval(interval);
                }
                if(milliSecond <= 999){
                    setMilliSecond(milliSecond+1);
                    
                }
            },1)
        } else {
            clearInterval(interval);
        }
        return ()=>{
            clearInterval(interval);
        }
    })
    return (
        <div>
            <h1>{hour}:{min}:{sec}:{milliSecond}</h1>
            <button onClick={onStart}>Start</button>
            <button onClick={onStop}>Stop</button>
            <button onClick={onReset}>Reset</button>
        </div>

    )
}

export default Stopwatch;