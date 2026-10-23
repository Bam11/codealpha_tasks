import { useState } from 'react'
import Button from './button'

export default function Calculator() {
  const [currentValue, setCurrentValue] = useState("");
  const [previousValue, setPreviousValue] = useState("");
  const [operator, setOperator] = useState("");

  function handleDecimalClick(i){
    setCurrentValue((prev) => prev + i);
  }

  function handleClear(){
    setCurrentValue("");
    setPreviousValue("");
    setOperator("");
  }

  function handlePercent(){
    setCurrentValue((prev) => prev / 100);
  }

  function handleSquareRoot(){
    setCurrentValue((prev) => Math.sqrt(prev));
  }

  function handleOperator(op){
    setOperator(op);
    setPreviousValue(currentValue);
    setCurrentValue("");
  }

  return (
    <div className="bg-white p-5 rounded-2xl">
      <div className="bg-gray-100 p-4 text-right text-6xl rounded-xl mb-6 shadow-sm">
        {currentValue}
      </div>
      <div className="grid grid-cols-4 gap-5">
        <Button className="bg-red-100 text-red-400" onClick={handleClear}>
          C
        </Button>
        <Button className="bg-gray-200 text-gray-800" onClick={handlePercent}>
          %
        </Button>
        <Button className="bg-gray-200 text-gray-800" onClick={handleSquareRoot}>
          &#8730;
        </Button>
        <Button className="bg-orange-400 text-white">
          &#247;
        </Button>
        <Button 
          onClick={() => handleDecimalClick("1")}
          className=""
        >
          1
        </Button>
        <Button 
          onClick={() => handleDecimalClick("2")}
          className=""
        >
          2
        </Button>
        <Button 
          onClick={() => handleDecimalClick("3")}
          className=""
        >
          3
        </Button>
        <Button className="bg-orange-400 text-white">
          &#215;
        </Button>
        <Button
          onClick={() => handleDecimalClick("4")} 
          className="">
          4
        </Button>
        <Button 
          onClick={() => handleDecimalClick("5")}
          className=""
        >
          5
        </Button>
        <Button 
          onClick={() => handleDecimalClick("6")}
          className=""
        >
          6
        </Button>
        <Button className="bg-orange-400 text-white">
          &#x2212;
        </Button>
        <Button 
          onClick={() => handleDecimalClick("7")}
          className=""
        >
          7
        </Button>
        <Button 
          onClick={() => handleDecimalClick("8")}
          className=""
        >
          8
        </Button>
        <Button 
          onClick={() => handleDecimalClick("9")}
          className=""
        >
          9
        </Button>
        <Button className="bg-orange-400 text-white">
          &#x2b;
        </Button>
        <Button 
          onClick={() => handleDecimalClick("0")}
          className="col-span-2"
        >
          0
        </Button>
        <Button 
          onClick={() => handleDecimalClick(".")} 
          className="">
          &#183;
        </Button>
        <Button className="bg-green-400 text-white">
          &#x3d;
        </Button>
      </div>
    </div>
  )
}
