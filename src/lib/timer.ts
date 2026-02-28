'use client';

import { useState, useRef, useCallback } from 'react';
export { formatTime } from './format';

export function useTimer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = useCallback(() => {
    if (running) return;
    setRunning(true);
    intervalRef.current = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
  }, [running]);

  const stop = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setRunning(false);
  }, []);

  const reset = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setSeconds(0);
    setRunning(false);
  }, []);

  return { seconds, running, start, stop, reset };
}

