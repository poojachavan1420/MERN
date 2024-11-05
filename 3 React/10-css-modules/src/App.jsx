import style from './App.module.css';
import Container from './container';

function App() {
 

  return (
    <>
    <Container>
    <h1 className={style.heading}>
      Hello "X AE A-Xii"
      </h1>
    </Container>
    <Container>
      <p>This is another random text</p>
    </Container>
    </>
  )
}

export default App;
