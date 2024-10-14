import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import Button from "./components/Button";

function App() {
const todoItems =[{id:1,todoText:'Buy Milk', todoDate:'4-sept-2024'},
                  {id:2,todoText:'Go to college', todoDate:'Weekday'},
                  {id:3,todoText:'Exercise', todoDate:'Everyday'}];
  return(
    <>
      <center>
       <AppName/>
       <AddTodo/>
       <Button/>
       <TodoItems todoItems={todoItems}/>
      </center>
    </>
  );
};

export default App;
