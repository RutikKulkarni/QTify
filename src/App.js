import React from 'react';
import Button from './components/Button/Button';
import Search from './components/Search/Search';

function App() {
  return (
    <>
      <Button>Give feedback</Button> <br></br>
      <Search placeholder={"Search a album of your choice"}/>
    </>
  );
}

export default App;
