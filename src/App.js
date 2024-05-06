import { useState, useRef } from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0);

  function plus(e) { 
    e.preventDefault(); 
    // Previous Method
    // const inputVal = inputRef.current.value;
    // const newResult = result + Number(inputVal);
    // setResult(newResult);
    setResult((result) => {
      if (typeof result === 'string') { // If result is 'string' then reset it to 0
        result = 0;
      }
      return result + Number(inputRef.current.value); // Exit if block and return to the function
    });
  }; 
 
  function minus(e) { 
  	e.preventDefault(); 
    setResult((result)=>{
      if (typeof result === 'string') {
        result = 0;
      }
      return result - Number(inputRef.current.value);
    }); 
  };
 
  function times(e) { 
    e.preventDefault(); 
    setResult((result)=>{
      if (typeof result === 'string') {
        result = 0;
      } 
      return result * Number(inputRef.current.value);
    }); 
  }; 
 
  function divide(e) {
    e.preventDefault();
    const inputVal = Number(inputRef.current.value);
    if (isNaN(inputVal) || inputVal === 0) { // Check if input is not number or input equal 0. If invalid, set result to error message
      setResult('Error: Enter number greater than 0 "hint: Cannot divide by zero"'); 
      return; // Exit the function with return
    }
    setResult((result)=>{
      if (typeof result === 'string') {
        result = 0;
      } 
      return result / inputVal;
    }); 
  };
 
  function resetInput(e) { 
    e.preventDefault(); 
    inputRef.current.value = 0;
  }; 
 
  function resetResult(e) { 
    e.preventDefault(); 
    setResult(0);
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p className="result-p" ref={resultRef}> 
          {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}> + </button> 
        <button onClick={minus}> - </button> 
        <button onClick={times}> x </button> 
        <button onClick={divide}> ÷ </button> 
        <button onClick={resetInput}> C </button> 
        <button onClick={resetResult}> AC </button> 
      </form> 
    </div> 
  ); 
} 
 
export default App; 
