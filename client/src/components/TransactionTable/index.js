import React from 'react';
import PropTypes from 'prop-types';
import CONSTANTS from '../../constants.js';

const TransactionTable = (props) => {
  const { data } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Income/Expense</th>
          <th>Sum</th>
        </tr>
      </thead>
      <tbody>
        {data.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.id}</td>
            <td>{transaction.typeOperation}</td>
            <td>{`${transaction.sum}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      typeOperation: PropTypes.string,
      sum: PropTypes.number,
    })
  ),
};
// typeOperation

export default TransactionTable;