import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


export const Transaction = ({ transaction }) => {
    const { deleteTransaction, editTransaction } = useContext(GlobalContext)
    const sign = transaction.amount < 0 ? '-' : '+'
    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text}
            <span>
                {sign}#{Math.abs(transaction.amount)}
                <button onClick={() => editTransaction(transaction.id)} className='edit-btn'>
                    Edit
                </button>
            </span>
            <button onClick={() => deleteTransaction(transaction.id)} className='delete-btn'>
                x
            </button>
        </li>
    );

}
