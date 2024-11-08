import List from "./components/List"

function App() {

  const studentArr = ["Isha","Advika","Dnyanu","Riya","Shouravi","Aayat","Arya"]
  console.log("came to paint App component");
  console.log(studentArr);
  
    //  let studentArr ;

    const onChangeHandler = (event) => {
      if (event.key === "Enter") {
        console.log(event.target.value);
        studentArr.push(event.target.value);
        console.log(studentArr);
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
