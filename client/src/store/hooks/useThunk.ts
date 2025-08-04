import { useEffect, useState } from 'react';
import { useAppDispatch } from '.';
import type { AsyncThunk } from '@reduxjs/toolkit';

const useThunk = (thunk: AsyncThunk) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<null | unknown>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        await dispatch(thunk()).unwrap();
      } catch (error) {
        setIsError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [thunk, dispatch]);

  return [isLoading, isError];
};

export default useThunk;
