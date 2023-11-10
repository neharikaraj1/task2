import React, { useState } from "react";
import './styles.css'
function App() {
  const [prevOp,setPrevOp] = useState("");
  const [currOp,setCurrOp] = useState("");
  const [sumOp,setSumOp] = useState("");
  const [op, setOp] = useState("");
  
  const handleNumClick = (number) =>{
    setCurrOp(currOp+number);
  }
  const handleOpClick =(op) =>{
    if(currOp !==""){
      if(prevOp !==""){
        calculate();
      }
      else if(sumOp !==""){
        setCurrOp(sumOp);
        setSumOp("");
        setPrevOp("");
      }
      else{
        setPrevOp(currOp);
      }
      setCurrOp("");
      setOp(op);
    }
  };
  const calculate = () =>{
    const prev = parseFloat(prevOp);
    const curr = parseFloat(currOp);
    switch(op){
      case "+":
        setCurrOp(prev +curr);
        break;
      case "-":
        setCurrOp(prev - curr);
        break;
        case "*":
          setCurrOp(prev * curr);
          break;
        case "/":
          setCurrOp(prev / curr);
          break;
        default:
          break;
    }
    setPrevOp(currOp);
    // setOp("");
  };
  const handleEqualClick = () => {
    if (currOp !== "" && prevOp !== "") {
      calculate();
    }
  };
  const handleClearClick = () => {
    setCurrOp("");
    setPrevOp("");
    setOp("");
    setSumOp("");
  };
  const handleDelCLick=() =>{
    setCurrOp(currOp.slice(0,-1));
  }
  return (
    <div className="Grid">
      <div className="output">
      <div className="prev-operand">
    <p>{prevOp}{op}{currOp}</p>
  </div>
  <div className="curr-operand">
    {currOp}
  </div>
      </div>
      <div className="button-container">
      <button onClick={() =>handleNumClick("7")}>7</button>
      <button onClick={() =>handleNumClick("8")}>8</button>
      <button onClick={() =>handleNumClick("9")}>9</button>
      <button onClick={handleClearClick} >C</button>
      <button onClick={handleDelCLick} >⌫</button>
      <button onClick={() =>handleNumClick("4")}>4</button>
      <button onClick={() =>handleNumClick("5")}>5</button>
      <button onClick={() =>handleNumClick("6")}>6</button>
      <button onClick={() =>handleOpClick("/")} className="span-two">&#247;</button>
      <button onClick={() =>handleNumClick("1")}>1</button>
      <button onClick={() =>handleNumClick("2")}>2</button>
      <button onClick={() =>handleNumClick("3")}>3</button>
      <button onClick={() =>handleOpClick("*")} className="span-two">&#215;</button>
      <button onClick={() =>handleNumClick("0")}>0</button>
      <button onClick={handleEqualClick}>=</button>
      <button className="coloring" onClick={() =>handleOpClick("-")}>-</button>
      <button onClick={() =>handleOpClick("+")} className="span-two">+</button>
      </div>
    </div>
  );
}

export default App;
