import {useEffect, useRef, useState} from 'react';

export function useInterval(callback, delay) {
    const [running, setRunning] = useState(false);
    const savedCallback = useRef();
    const interval = useRef(-1);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    const start = () => {
        setRunning(true);
        interval.current = setInterval(() => {
            savedCallback.current();
        }, delay);
    }

    const stop = () => {
        setRunning(false);
        clearInterval(interval.current);
    }

    return [start, stop, running];
}