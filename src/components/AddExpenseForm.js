import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import {v4 as uuidv4 } from 'uuid'

const AddExpenseForm = () => {
    const { dispatch } = useContext(AppContext)

    const [name, setName] = useState('')
    const [cost, setCost] = useState(0)

    const onSubmit = evt => {
        evt.preventDefault()

        const expense = {
            id: uuidv4(),
            name: name,
            cost: cost
        }

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='row'>
                <div className='col-sm'>
                    <label htmlFor='name'>Name</label>
                    <input
                        className='form-control'
                        id='name'
                        onChange={evt => setName(evt.target.value)}
                        placeholder="Grocery shopping..."
                        required='required'
                        type='text'
                        value={name}
                    />
                </div>
                <div className='col-sm'>
                    <label htmlFor='cost'>Name</label>
                    <input
                        className='form-control'
                        id='cost'
                        onChange={evt => setCost(evt.target.value)}
                        required='required'
                        type='number'
                        value={cost}
                    />
                </div>
                <div className='col-sm'>
                    <button type='submit' className='btn btn-primary mt-3'>
                        Save
                    </button>
                </div>
            </div>
        </form>
    )
}

export default AddExpenseForm
