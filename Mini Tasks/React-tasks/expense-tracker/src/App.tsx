import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Milk", amount: 10, category: "Grocires" },
    { id: 2, description: "Bloom", amount: 17, category: "Utilities" },
    { id: 3, description: "Cinema", amount: 20, category: "Entertainment" },
  ]);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <>
      <ExpenseForm
        onSubmit={(newExpenses) =>
          setExpenses([
            ...expenses,
            { ...newExpenses, id: expenses.length + 1 },
          ])
        }
      ></ExpenseForm>
      <ExpenseFilter onSelectCategory={handleSelectCategory}></ExpenseFilter>
      <ExpenseList
        expenses={filteredExpenses}
        onDelete={handleDelete}
      ></ExpenseList>
    </>
  );
};

export default App;
