import React from 'react'

import AddExpenseForm from './components/AddExpenseForm'
import Budget from './components/Budget'
import ExpenseTotal from './components/ExpenseTotal'
import Remaining from './components/Remaining'

import 'bootstrap/dist/css/bootstrap.min.css'
import ExpenseList from './components/ExpenseList'

const App = () => {
    return (
        <div className='container'>
            <h1 className='mt-3'>Budget tracker app</h1>

            <div className='row mt-3'>
                <div className='col-sm'>
                    <Budget />
                </div>
                <div className='col-sm'>
                    <Remaining />
                </div>
                <div className='col-sm'>
                    <ExpenseTotal />
                </div>
            </div>

            <h3 className='mt-3'>Expenses</h3>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <ExpenseList />
                </div>
            </div>

            <h3 className='mt-3'>Add expense</h3>
            <div className='mt-3'>
                <div className='col-sm'>
                    <AddExpenseForm />
                </div>
            </div>

        </div>
    )
}

export default App
