import './App.css'
import { Calculator } from './components/Calculator'
import { Button } from './components/Button'
import { useState } from 'react'


function App() {
  const [string,setString] = useState({
    lower:'0',
    upper:''
  });


  function isNumber(char) {
    return !isNaN(parseFloat(char)) || char === '.';
  }


  function addSymbol(char) {
    if(isNumber(char) && string.lower !== '0'){
      if(string.upper.includes('=')){
        clear()
        setString(preState =>({
          lower:preState.lower + char,
          upper:preState.upper + char
        }))
      }else{
        setString(preState =>({
          lower:preState.lower + char,
          upper:preState.upper + char
        }))
      }
    }else{
      if(string.upper.includes('=')){
        clear()
        setString(preState =>({
          lower:char,
          upper:preState.upper + char
        }))
      }else{
        setString(preState =>({
          lower:char,
          upper:preState.upper + char
        }))
      }

    }


  }
  


  function addDecimal(char){
    if(!string.lower.includes('.')){
      if(string.upper.includes('=')){
        clear()
        setString(preState =>({
          lower:preState.lower + char,
          upper:preState.upper + char
        }))
      }else{
        setString(preState =>({
          lower:preState.lower + char,
          upper:preState.upper + char
        }))
      }
    }
  }


  function clear(){
    setString({
      lower:'0',
      upper:''
    })
  }

  function calculate(){
    let result = eval(string.upper)
    setString({
      lower: result.toString(),
      upper: `${string.upper} = ${result}`
    });
  }



  return<>
    <Calculator equation={string}>
      <Button id="clear"  value="AC" classname="all-clear" func={clear} />
      <Button id="one" func={addSymbol} value="1" classname="default number" />
      <Button id="two" func={addSymbol} value="2" classname="default number" />
      <Button id="three" func={addSymbol} value="3" classname="default number" />
      <Button id="four" func={addSymbol} value="4" classname="default number" />
      <Button id="five" func={addSymbol} value="5" classname="default number" />
      <Button id="six" func={addSymbol} value="6" classname="default number" />
      <Button id="seven" func={addSymbol} value="7" classname="default number" />
      <Button id="eight" func={addSymbol} value="8" classname="default number" />
      <Button id="nine" func={addSymbol} value="9" classname="default number" />
      <Button id="zero" func={addSymbol} value="0" classname="default number" />
      <Button id="decimal" func={addDecimal} value="." classname="default number" />
      <Button id="equals"  value="=" func={calculate} classname="equal" />
      <Button id="subtract" func={addSymbol} value="-" classname="default operations" />
      <Button id="divide" func={addSymbol} value="/" classname="default operations" />
      <Button id="multiply" func={addSymbol} value="*" classname="default operations" />
      <Button id="add" func={addSymbol} value="+" classname="default operations" />
      
    </Calculator>
  </>


}

export default App
