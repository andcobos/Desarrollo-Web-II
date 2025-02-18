import { BudgetForm } from "./components/BudgetForm"; 
import { useContext } from "react";
import { BudgetStateContext } from "./context/BudgetContext";
import BudgetTracker from "./components/BudgetTracker";

function App(){
    const {budget}=useContext(BudgetStateContext)
    const isValidBudget= budget>0;

    return(
        <>
            <header className="bg-blue-600 py-8 max-h-72">
                <h1 className="uppercase text-center font-black text-4xl text-white">
                    Planificador de Gastos
                </h1>
            </header>
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
                {isValidBudget ? <BudgetTracker /> : <BudgetForm />}

                {isValidBudget && (
                    <main className="max-w-3xl mx-auto py-10">
                        <ExpenseModal />
                    </main>
                )
                }

            </div>
        </>
    )
}

export default App