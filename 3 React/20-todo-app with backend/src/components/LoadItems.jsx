import { useContext, useEffect } from "react";
import { TodoItemsContext } from "../store/TodoItemsContext";
import Button from "./Button";

const LoadItems = () => {
  const { todoItems, addAllTodoItems } = useContext(TodoItemsContext);

  fetch("http://localhost:5173/todos")
      .then((res) => res.json())
      .then (items => {
        console.log(items);
        const newItems = items.map(item => 
          ({
          id:item.id ,
          todoText:item.todoText ,
          tododate:item.todoDate
        })
      );
        addAllTodoItems(newItems);
      });

     const [isLoading, setIsLoading] = useState (false);

  if (todoItems.length !== 0) {
    return <></>;
  }

  useEffect (() => {
    fetch("http://localhost:5173/todos")
      .then((res) => res.json())
      .then (items => {
        console.log(items);
        const newItems = items.map(item => 
          ({
          id:item.id ,
          todoText:item.todoText ,
          tododate:item.todoDate
        },[])
      );
        addAllTodoItems(newItems);
      });
  })

  const loadItemHandler = () => {
    
  };

  return (
    <>
      <h2>Enjoy your day</h2>
      {isLoading && <p>Loading...</p>}
    </>
  );
};

export default LoadItems;
