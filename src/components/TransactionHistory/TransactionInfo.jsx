import { TransactionHistory } from "./TransactionHistory";

export const TransactionInfo = ({transactions}) => {
    return (
            <thead>
      {transactions.map(transaction => (
        <tr key={transaction.id}>
          <TransactionHistory transaction={transaction} />
        </tr>
      ))}
    </thead>
    )
}