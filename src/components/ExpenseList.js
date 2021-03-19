import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

import ExpenseItem from './ExpenseItem'

const ExpenseList = () => {
    const { expenses } = useContext(AppContext)

    return (
        <ul className='list-group'>
            {expenses.map(ele => (
                <ExpenseItem
                    cost={ele.cost}
                    id={ele.id}
                    name={ele.name}
                    key={ele.id}
                />
            ))}
        </ul>
    )
}

export default ExpenseList
