import React from "react";
import PropType from "prop-types";
import TransactionTable from ".";
import Header from "../../components/Header";
import CONSTANTS from "../../constants";
import {Link} from "react-router-dom";
import styles from "./TransactionPage.sass";
const data = [
    {
        id: 1,
        type: CONSTANTS.INCOME,
        sum: 350
    },
    {
        id: 2,
        type: CONSTANTS.EXPENSE,
        sum: 350
    },
    {
        id: 3,
        type: CONSTANTS.INCOME,
        sum: 400
    },
    {
        id: 4,
        type: CONSTANTS.INCOME,
        sum: 450
    },
    {
        id: 2,
        type: CONSTANTS.EXPENSE,
        sum: 600
    },
];
const TransactionPage = props => {
    return (
        <>
        <Header />
        <div>
            {
                data? <transactionTable data={data} />
                : <div>NO transactions</div>
            }
            <Link to='/dashboard'>Back to Dashboard</Link>
        </div>
        </>
    );
};
TransactionPage.propTypes = {};
export default TransactionPage;