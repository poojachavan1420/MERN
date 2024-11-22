
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import Button from "./components/Button";

function App() {
  return(
    <>
      <center>
       <AppName/>
       <AddTodo/>
       <Button/>
       <TodoItems/>
       </center>
    </>
  );
};

export default App;
