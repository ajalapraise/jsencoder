// import React, { useContext, useEffect, useRef, useState } from 'react';
// import Chart from 'chart.js/auto';
// import { GlobalContext } from '../context/GlobalState';

// export const TransactionList = () => {
//     const { transactions } = useContext(GlobalContext);
//     const chartRef = useRef(null);
//     const [cumulativeTotal, setCumulativeTotal] = useState({ income: [], expense: [] });

//     useEffect(() => {
//         // Calculate cumulative total of transactions
//         const cumulativeAmounts = transactions.reduce(
//             (acc, transaction) => {
//                 acc.income.push(
//                     acc.income.length > 0
//                         ? acc.income[acc.income.length - 1] + Math.max(0, transaction.amount)
//                         : Math.max(0, transaction.amount)
//                 );
//                 acc.expense.push(
//                     acc.expense.length > 0
//                         ? acc.expense[acc.expense.length - 1] + Math.min(0, transaction.amount)
//                         : Math.min(0, transaction.amount)
//                 );
//                 return acc;
//             },
//             { income: [], expense: [] }
//         );

//         // Update state variable
//         setCumulativeTotal(cumulativeAmounts);

//         // Create a line chart
//         const chart = new Chart(chartRef.current, {
//             type: 'line',
//             data: {
//                 labels: transactions.map((_, index) => index + 1), // Use transaction indices as x-axis labels
//                 datasets: [
//                     {
//                         label: 'Income',
//                         data: cumulativeAmounts.income,
//                         borderColor: '#36A2EB',
//                         borderWidth: 2,
//                         fill: false,
//                     },
//                     {
//                         label: 'Expense',
//                         data: cumulativeAmounts.expense,
//                         borderColor: '#FF6384',
//                         borderWidth: 2,
//                         fill: false,
//                     },
//                 ],
//             },
//             options: {
//                 scales: {
//                     y: {
//                         beginAtZero: true,
//                     },
//                     x: {
//                         type: 'linear', // Specify x-axis type as linear
//                         position: 'bottom',
//                     },
//                 },
//                 plugins: {
//                     tooltip: {
//                         mode: 'nearest',
//                         callbacks: {
//                             label: (tooltipItem, data) => {
//                                 const datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
//                                 const value = tooltipItem.formattedValue;
//                                 const index = tooltipItem.dataIndex;

//                                 // Get the specific transaction for the current data point
//                                 const transaction = transactions[index];

//                                 // Customize the tooltip content as needed
//                                 return `${datasetLabel}: ${value}, Date: ${transaction.date}, Description: ${transaction.description}`;
//                             },
//                         },
//                     },
//                 },
//             },
//         });

//         // Cleanup function
//         return () => {
//             // Destroy the chart instance when the component unmounts
//             chart.destroy();
//         };
//     }, [transactions]);

//     return (
//         <div>
//             <canvas ref={chartRef} width="400" height="400"></canvas>
//             <div className="inc-exp-container">
//                 <div>
//                     <h4>Income</h4>
//                     <p className="money plus">Total: #{cumulativeTotal.income[cumulativeTotal.income.length - 1]}</p>
//                 </div>
//                 <div>
//                     <h4>Expense</h4>
//                     <p className="money minus">Total: #{cumulativeTotal.expense[cumulativeTotal.expense.length - 1]}</p>
//                 </div>
//             </div>
//         </div>
//     );
// };


import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    const handleEdit = (editedTransaction) => {
        // Implement your logic to handle the editing of the transaction
        console.log('Editing transaction:', editedTransaction);
    };

    const handleDelete = (transactionId) => {
        // Implement your logic to handle the deletion of the transaction
        console.log('Deleting transaction with ID:', transactionId);
    };

    return (
        <>
            <h1>History</h1>
            <ul className='list'>
                {transactions.map((transaction) => (
                    <Transaction
                        key={transaction.id}
                        transaction={transaction}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                ))}
            </ul>
        </>
    );
};

// export default TransactionList;

