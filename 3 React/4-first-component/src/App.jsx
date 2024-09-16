import './App.css'
import  {DangerButton,SuccessButton} from './components/Buttons.jsx'
import Heading from './components/Heading'
import Paragraph from './components/Paragraph'
import DynamicComponent from './components/DynamicComponents.jsx'
import StudentList from './components/studentList.jsx'
import RandomNumber from './components/RandomNumber.jsx'
import Title from './components/Title.jsx'

function App() {
  const students =['pooja','Advika','Riya','priyanshi','Rudrakshi','isha','arya']



  return (
    <>
    <Title  titleText="Hello World"/>
    <Title  titleText="Hello World"/>
    <Title  titleText="Hello World"/>
    <Title  titleText="Hello World"/>

      <Heading />
      <RandomNumber/>
      <RandomNumber/>
      <RandomNumber/>
      <RandomNumber/>
      <RandomNumber/>
      <Paragraph/>
      <DangerButton/>
      <SuccessButton/>
      <DynamicComponent/>
      <DynamicComponent/>
      <DynamicComponent/>
      <DynamicComponent/>
      <DynamicComponent/>
      <StudentList students={students}/> 
    </>
  )
}

export default App
