import { useContext, useEffect, useState } from "react";

import { TodoItemsContext } from "../store/TodoItemsContext";

import Button from "./Button";


 

const LoadItems = () => {

 const { todoItems, addAllTodoItems } = useContext(TodoItemsContext);

 const [isLoading, setIsLoading] = useState(false);


 

 useEffect(() => {

   setIsLoading(true);

   fetch("http://localhost:5173/todos")

     .then((res) => res.json())

     .then((items) => {

       console.log(items);

       const newItems = items.map((item) => ({

         id: item.id,

         todoText: item.todoText,

         tododate: item.todoDate,

       }));

       addAllTodoItems(newItems);

     })

     .catch((error) => {

       console.error("Error fetching todos:", error);

     })

     .finally(() => {

       setIsLoading(false);

     });

 }, [addAllTodoItems]); // Added dependency array to ensure it runs once


 

 if (todoItems.length !== 0) {

   return null; // Instead of an empty fragment

 }


 

 return (

   <>

     <h2>Enjoy your day</h2>

     {isLoading && <p>Loading...</p>}

   </>

 );

};

