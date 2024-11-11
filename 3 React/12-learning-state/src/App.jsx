import { useState } from "react";
import List from "./components/List"

function App() {

  const [studentArr,setStudentArr]=useState(["Isha","Advika","Dnyanu","Riya","Shouravi","Aayat","Arya"]);

  console.log("Painting App Component");
  console.log("State Value is:", studentArr);

  
  
  
  
    //  let studentArr ;

    const onChangeHandler = (event) => {
      if (event.key === "Enter") {
        console.log(event.target.value);
        const newArr = [...studentArr, event.target.value];
        event.target.value ='';
        setStudentArr(newArr);
        console.log(newArr);
      }
    };
  

   return (
    <>
      <h1 className="text-5xl">
        Learners Of Mern Stack
      </h1>
      <List list={studentArr}></List>
      <input type="text" placeholder="New student Name"  onKeyDown={onChangeHandler}/>
    </>
  );
}

export default App;
