function Button(obj){
    
    return(

        <div className="footer">
            <div onClick={()=>obj.setState({income:true})} className="income">Income</div>
            <div className="expense" onClick={()=>obj.setState({expense:true})}>Expense</div>
        </div>
    )

    
}   

export default Button;