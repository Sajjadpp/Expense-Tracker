import Header from "./component/Heading"
import "./app.css"
import BalanceStatement from "./component/BalanceStatement"
import IncomeAndExpense from "./component/IncomeAndExpense"
import History from "./component/History"
import AddTransaction from "./component/AddTransaction"
import Button from "./component/Buttons"

import {useState} from "react"
function App(){

  const[state, setState] = useState({income: false,expense: false});
  const[arr, setArr] =useState([]);
  
  console.log(arr)
  
  
  
  
  return(

    <div className="body">

      <Header/>

      {state.expense || state.income ? 
      
          <AddTransaction color={state.expense ? "rgb(255, 111, 111)" : "rgb(162, 255, 162)"} arr={arr} setArr={setArr} state={state} setState={setState}/> 
        
          : <Container state = {state} setState ={setState} arr={arr} setArr={setArr}/>}
      
      
    </div>
  )
}

function Container(obj){

  

  return(
    <div className="container">

        <BalanceStatement/>
        <IncomeAndExpense />
        <History arr={obj.arr}/>
        <Button state = {obj.state} setState = {obj.setState} />
      </div>
  )
}


export default App;