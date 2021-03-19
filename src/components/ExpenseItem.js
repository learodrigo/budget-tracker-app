import React from 'react'
import { TiDelete } from 'react-icons/ti'

const ExpenseItem = (props) => {
    const formattedCost = props.cost.toFixed(2)

    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {props.name}

            <div>
                <span className='badge badge-primary badge-pill mr-3'>
                    ${formattedCost}
                </span>

                <TiDelete size='1.5em'></TiDelete>
            </div>
        </li>
    )
}

export default ExpenseItem
