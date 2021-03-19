import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

import { TiDelete } from 'react-icons/ti'

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext)
    const formattedCost = props.cost.toFixed(2)

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id
        })
    }

    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {props.name}

            <div>
                <span className='badge badge-primary badge-pill mr-3'>
                    ${formattedCost}
                </span>

                <TiDelete onClick={handleDeleteExpense} size='1.5em'></TiDelete>
            </div>
        </li>
    )
}

export default ExpenseItem
