import React, { useState, useEffect } from 'react';
import './style.css';

import ProgressBar from './components/ProgressBar';


//https://www.youtube.com/watch?v=9Ez_gdsgGiM&t=34s


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