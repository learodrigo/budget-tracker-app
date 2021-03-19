import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = () => {
    const expenses = [
        { id: 1, name: 'Lidl wines', cost: 73.39 },
        { id: 2, name: 'Pennny', cost: 32 },
        { id: 3, name: 'BVG', cost: 60.25 },
        { id: 4, name: 'Doener', cost: 3.5 },
        { id: 5, name: 'Party', cost: 54.34 }
    ]

    return (
        <ul className='list-group'>
            {expenses.map(ele => (
                <ExpenseItem
                    cost={ele.cost}
                    id={ele.id}
                    name={ele.name}
                />
            ))}
        </ul>
    )
}

export default ExpenseList
