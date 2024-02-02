import React, { useState, useEffect } from 'react';
import './style.css';

import ProgressBar from './components/ProgressBar';

export default function App() {
  const [success, setSuccess] = useState(false);

  function onComplete(){
    console.log("Loaded")
    setSuccess(true)
  }

  return (
    <div>
      <ProgressBar onComplete={()=>onComplete()}/>
      <span>{success ? "Completed!" : "Loading...."}</span>
    </div>
  );
}