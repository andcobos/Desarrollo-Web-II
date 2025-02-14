import { useState } from "react"

export const BudgetForm =() => {

    const[budget, setBudget]=useState(0)
    const isInvalid= isNaN(budget) || budget<=0 //i no es un numero >0 es invalido

    const handleChange=(e)=>{setBudget(e.target.valueAsNumber)}
}