
import AppName from "./components/AppName";
import StateVsRef from "./components/StateVsRef";
import AddTodo from "./components/AddTodo";
import TestForm from "./components/testForm";
import TodoItems from "./components/TodoItems";
import Button from "./components/Button";

function App() {
  return(
    <>
      <center>
       <AppName/>
       <StateVsRef/>
       {/* <TestForm/> */}
       <Button/>
       {/* <AddTodo/>
       <TodoItems/> */}
       </center>
    </>
  );
};

export default App;
