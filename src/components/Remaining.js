import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Remaining = () => {
    const { expenses, budget } = useContext(AppContext)

    const totalExpenses = expenses.reduce((acc, item) => acc += item.cost, 0)
    const alertType = totalExpenses < budget ? 'alert-success' : 'alert-danger'

    return (
        <div className={`alert ${alertType}`}>
            <span>
                Remaining: ${budget - totalExpenses}
            </span>
        </div>
    )
}

export default Remaining
