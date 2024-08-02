export default function History(arr){
    
    return(

        <div className="history">
            <h3>History</h3>
            <hr />
            <ul className="transactionList">
            {
                arr.arr.map((obj)=>{

                    return(

                        <li style={{borderRightColor: obj.money ==="income" ? "green" : "red"}}>
                            <div className="text">{obj.narration}</div>
                            <div className="amount">{obj.money ==="income" ? obj.number : "-"+obj.number}</div>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}