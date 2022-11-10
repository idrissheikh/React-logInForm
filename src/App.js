import './App.css';
import './Components/LogInForm.css'
import LogInForm from './Components/LogInform';




function App() {
  return( <LogInForm/>
  )
    
  /*const[ counter, setCounter] = useState(0);
  const[title, setTitle] =useState("");
  const [name, setName] = useState("");

  function conuntUp(){ setCounter(counter + 1);};
  const handleTitle = ()=> setTitle('Idris page');


  useEffect(()=>{
    console.log('inside useEffect 1');
    document.title = title;

    return()=>{
      setTimeout(()=>{
        setTitle("");
        
      },2000)

        console.log('cleanUp');
    }

  },[title]);


  useEffect(()=>{
    console.log('inside useEffect 2');
    document.title = counter;



  },[counter])


  return (
    <div className="App">
      <button className='btn btn-primary' onClick={conuntUp}>Click</button>
      <button className='btn btn-primary' onClick={handleTitle}>change</button>

        <h2 className='mt-3'>{counter}</h2>
    </div> 
  );*/
}

export default App;
