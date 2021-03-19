import React, { useState } from 'react'

const EditBudget = (props) => {
    const [value, setValue] = useState(props.budget)

    return (
        <>
            <input
                class='form-control mr-3'
                id='name'
                required='required'
                type='number'
                onChange={evt => setValue(evt.target.value)}
                value={value}
            />

            <button
                class='btn btn-primary'
                onClick={() => props.handleSaveClick(value)}
                type='button'
            >
                Save
			</button>
        </>
    )
}

export default EditBudget
