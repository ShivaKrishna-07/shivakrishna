"use client"

import { useCallback, useRef, useEffect, useState } from "react";

export function useScreenBreakpoint(breakpoint: number) {
  const [width, setWidth] = useState<boolean>(true);

  const handleResize = useCallback(() => {
    setWidth(window.innerWidth < breakpoint);
  }, [breakpoint]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return width;
}

export function useDebounceValue<T>(value: T, wait: number) {
  const [_value, setValue] = useState<T>(value);
  const refMounted = useRef<boolean>(false);
  const refTimeout = useRef<number | undefined>();

  const cancel = () => window.clearTimeout(refTimeout.current);

  useEffect(() => {
    if (refMounted.current) {
      cancel();
      refTimeout.current = window.setTimeout(() => {
        setValue(value);
      }, wait);
    }
  }, [value, wait]);

  useEffect(() => {
    refMounted.current = true;
    return cancel;
  }, []);

  return _value;
}