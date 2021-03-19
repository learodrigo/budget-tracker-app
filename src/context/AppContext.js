import { createContext, useReducer } from 'react'

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
        case 'DELETE_EXPENSE':
        case 'EDIT_EXPENSE':
            break
        default:
            return state
    }
}

const initialState = {
    budget: 12345,
    expenses: [
        { id: 1, name: 'Placeholder', cost: 40 },
        { id: 2, name: 'Placeholder', cost: 23 }
    ]
}

export const AppContext = createContext()

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (
        <AppContext.Provider value={{
            budget: state.budget,
            expenses: state.expenses,
            dispatch
        }}>
            {props.children}
        </AppContext.Provider>
    )
}
