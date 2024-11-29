
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import Button from "./components/Button";

import { TodoItemsProvider } from "./store/TodoItemsContext";

function App() {



  return(
    <TodoItemsProvider>
      <center>
       <AppName/>
       <AddTodo />
       <Button/>
       <TodoItems/>
       </center>
       </TodoItemsProvider>
    
  );
};

export default App;
