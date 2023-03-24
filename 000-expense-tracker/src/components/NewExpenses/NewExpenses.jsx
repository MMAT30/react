
import { useState } from "react"
import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)

    const saveExpenseFormData = (data) => {
        const expenseData = {
            ...data,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseFormData} onCancel={stopEditingHandler}/>}
        </div>
    )
}

export default NewExpense