import React, { useEffect, useState, useRef } from 'react';
import './ProgressBar.css';

function ProgressBar({onComplete}) {
  const [value, setValue] = useState(0);

  if(value == 100){
    console.log("log")
    onComplete()
  }

  let timerID = useRef(0);

  useEffect(() => {
    timerID.current = setInterval(() => {

      setValue((prev) => {

        if (prev == 100) {
          clearInterval(timerID.current);
          return prev;
        }
        return prev + 1;

      });//setValue End

    }, 100);

    return () => clearInterval(timerID.current);
  }, []);



  return (
    <div className="progress-bar">
      <span style={{color: `${value>49 ? '#fff':'#000'}`}}>{value.toFixed()}%</span>

      <div className="progress-bar-fill"
        // style={{width:`${value}%`}}
        // style={{transform:`scaleX(${value/100})`, transformOrigin: "left"}}
        style={{transform:`translateX(${value-100}% )`}}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        role="progressbar"
      ></div>
    </div>
  );
}

/*Remember
  style={{width:`${value}%`}}

  Followup question:- 
  width is bad for performance and rerender layout
  
  2 ways :
    - style= {{transform:`scaleX(${value/100})`, transformOrigin: "left"}}
          this is starting from middle and then expand both sides,
          use transformOrigin to start from left 

    - style= {{transform:`translateX(${value-100}% )`}}
      this is full and then decrease
*/

export default ProgressBar;
