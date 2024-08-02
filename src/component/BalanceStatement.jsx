function BalanceStatement(obj){

    return(

        <div className="balance-container">
            <h3>YOUR BALANCE</h3>
            <h1>${obj.balance}</h1>
        </div>
    )
}
export default BalanceStatement;