import PropTypes from "prop-types";
import { TdBody } from "./TransactionHistory.styled";

export const TransactionHistory = ({ transaction: { type, amount, currency } }) => {
  return<tr>
      <TdBody >{type}</TdBody>
      <TdBody>{amount}</TdBody>
      <TdBody>{currency}</TdBody>
      </tr>   
  }

TransactionHistory.propTypes = {
  transaction: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
    
    };