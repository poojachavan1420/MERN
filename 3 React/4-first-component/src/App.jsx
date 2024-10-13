import './App.css'

import Heading from './components/Heading'
import Paragraph from './components/Paragraph'
import Button from './components/Buttons'
import DynamicComponent from './components/DynamicComponents.jsx'
import StudentList from './components/studentList.jsx'
import RandomNumber from './components/RandomNumber.jsx'
import Title from './components/Title.jsx'

function App() {
  const students =['pooja','Advika','Riya','priyanshi','Rudrakshi','isha','arya'];

  const newStudents =['ishita','Gauri','manvi','rudra','aanchal','dnyanu','shouravi'];

  const clickMeHandler = () =>{
    console.log('clickMeHandler Clicked');
}

const deleteHandler = () =>{
  console.log('deleteHandler Clicked');
}

const sendHandler = () =>{
  console.log('sendHandler Clicked');
}


  return (
    <>
    <Title  titleText="Hello World"/>
    <Title  titleText="I am learning coding"/>
    <Title  titleText="KG coding"/>
    <Title  titleText="subscribe"/>
    <Button btnType='success' btnText="Click Me" handler={clickMeHandler}/>
    <Button btnType='danger' btnText="Delete"   handler={deleteHandler}/>
    <Button  btnText="send"   handler={sendHandler}/>

      <Heading />
      <RandomNumber/>
      <RandomNumber/>
      <RandomNumber/>
      <RandomNumber/>
      <RandomNumber/>
      <Paragraph/>
      
      <DynamicComponent/>
      <DynamicComponent/>
      <DynamicComponent/>
      <DynamicComponent/>
      <DynamicComponent/>
      <StudentList students={students}/> 
      <StudentList/>
      <StudentList students={newStudents}/>
    </>
  )
}

export default App
