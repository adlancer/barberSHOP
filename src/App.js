import React from 'react';
import { useState, useEffect } from 'react';
import Wrapper from './components/Wrapper';
import Spinner from './components/Spinner';

const App = () => {

  const [loaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 2000)
  }, [])

  return (
    <>
      <Wrapper />
      {loaded || <Spinner />}
    </>

  );
}

export default App