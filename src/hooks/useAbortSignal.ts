import { useRef, useEffect } from 'react';

export const useAbortSignal = (): AbortSignal => {
  const controller = useRef<AbortController>(new AbortController());
  useEffect(() => () => controller.current.abort(), []);
  return controller.current.signal;
};
