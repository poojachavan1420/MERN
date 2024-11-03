import  List from "./components/list"


function App() {

  const studentArr = ["Isha","Advika","Dnyanu","Riya","Shouravi","Aayat","Arya"];
  //  let studentArr ;

   return (
    <>
      <h1 className="text-5xl">
        Learners Of Mern Stack
      </h1>
      <List list={studentArr}></List>
    </>
  )
}

export default App
