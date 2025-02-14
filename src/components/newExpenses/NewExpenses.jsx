import React from 'react'
import ExpensesForm from './ExpensesForm'
import './NewExpenses.css'
import Card from '../ui/Card';



function NewExpenses() {
  return (
    <Card className='new-expense'>
        <ExpensesForm/>
    </Card>
  )
}

export default NewExpenses