
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import LoadItems from "./components/LoadItems";
import TodoItems from "./components/TodoItems";
import Button from "./components/Button";
import { TodoItemsProvider } from "./store/TodoItemsContext";

function App() {



  return(
    <TodoItemsProvider>
      <center>
       <AppName/>
       <AddTodo />
       <LoadItems/>
       <Button/>
       <TodoItems/>
       </center>
       </TodoItemsProvider>
    
  );
};

export default App;
