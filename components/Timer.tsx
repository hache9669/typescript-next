import * as React from 'react';
import moment from 'moment'
const { useState,useEffect } = React;

type Props = {
    initial: Date
}

const Timer = (props: Props)=>{
    const [time, setTime] = useState(props.initial)

    useEffect(() => {
        const timerId = setTimeout(() => {
            setTime(time => moment(time).add('second',1).toDate())
        },1000)
        return () => clearTimeout(timerId)
    },[time])

    return <>
        time: <span>{time.toString()}</span>
    </>
}

export default Timer