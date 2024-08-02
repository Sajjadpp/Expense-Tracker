import { useState } from "react";

function AddTransaction(obj){

    const [number, setNumber] = useState("");
    const [narration, setNaration] = useState("");
    
    return(

        <div style={{backgroundColor: obj.color}} className="addTransaction">
            <label htmlFor="amount"></label>
            <input type="number" onChange={(e)=>{setNumber(e.target.value)}} placeholder="amount" />
            <label htmlFor="naration"></label>
            <input type="text" placeholder="Naration" onChange={(e)=>{setNaration(e.target.value)}}/>

            <button onClick={()=>Calculate(obj, number, narration)}><i className="fa-solid fa-check" ></i></button>
        </div>
    )
}

function Calculate(obj, number, narration){
    let money;

    if(obj.color === "rgb(255, 111, 111"){

        money = "expense"
        let newExpense = obj.arr.filter((item)=>{

            return item.money === "expense" ? item.number : 0
        })

        console.log(newExpense)

        obj.setArr([...ob.arr,{

            number,
            narration,
            money
        }])

    }

    // function setExpensed(){
    //     money = "expence"   
    //     console.log(number)
        
    //     let newArr = obj.arr.map((item)=>{

    //         return item.number
    //     })
    //     newArr.forEach((item)=>{

    //         return 
    //     })
    //     console.log(newArr)

    //     obj.setArr([...obj.arr,{

    //         number,
    //         narration,
    //         money

    //     }])
        
        
    //     obj.setState(false)
        
    // }
    
    // function setIncomed(){

    //     money = "income"

    //     setIncome(income+1)
        
    //     obj.setArr([...obj.arr,{

    //         number,
    //         narration,
    //         money,


    //     }])
    //     obj.setState(false)
    // }
    

    
}
export default AddTransaction;