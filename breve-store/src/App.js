import React from 'react';
import HomePage from './homepage'
import './App.css';

const testItems = [{
  name: "hats",
  description: "trendiest hats around"
},
{
  name: "shoes",
  description: "trendiest shoes around"
}]

const App = () => {

  return (
    <HomePage items={testItems} />
  );
}

export default App;
