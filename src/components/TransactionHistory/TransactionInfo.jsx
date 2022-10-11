import { TransactionHistory } from "./TransactionHistory"
import { ThHead} from "./TransactionHistory.styled"


export const TransactionInfo = ({transactions}) => {
    return(
      <table>
  <thead>
    <tr>
      <ThHead>Type</ThHead>
      <ThHead>Amount</ThHead>
      <ThHead>Currency</ThHead>
    </tr>
    </thead>
          {transactions.map(transaction => (
      
                <tbody key={transaction.id}>
                    <TransactionHistory transaction={transaction} />
              </tbody>
              
            ))}
  </table>
    )
    }
