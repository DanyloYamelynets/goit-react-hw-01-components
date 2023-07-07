import PropTypes from 'prop-types';
import {
  TransactionTable,
  TableHead,
  TableTitle,
  TransactionKey,
  TransactionType,
  TransactionAmount,
  TransactionCurrency,
} from './TransactionStyled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable className="transaction-history">
      <TableHead>
        <tr>
          <TableTitle>Type</TableTitle>
          <TableTitle>Amount</TableTitle>
          <TableTitle>Currency</TableTitle>
        </tr>
      </TableHead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TransactionKey key={id}>
              <TransactionType>{type}</TransactionType>
              <TransactionAmount>{amount}</TransactionAmount>
              <TransactionCurrency>{currency}</TransactionCurrency>
            </TransactionKey>
          );
        })}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ),
};
