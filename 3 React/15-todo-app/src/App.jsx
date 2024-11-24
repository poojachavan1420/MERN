import { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import Button from "./components/Button";
import initialTodoItems from "./data/initialTodoItems";

function App() {

const [todoItems , setTodoItems]  = useState(initialTodoItems);


const addTodoItem = (todoText ,  todoDate) =>{
  setTodoItems(currentItems => {
    return [...currentItems, {id:todoText, todoText, todoDate}]
  })
}

const deleteTodoItem = (todoId) => {
    setTodoItems(currentItems => {
    return currentItems.filter(item => item.id !== todoId);
  })
}


  return(
    <>
      <center>
       <AppName/>
       <AddTodo addTodoItem={addTodoItem}/>
       <Button/>
       <TodoItems todoItems={todoItems} deleteTodoItem={deleteTodoItem}/>
       </center>
    </>
  );
};

export default App;
