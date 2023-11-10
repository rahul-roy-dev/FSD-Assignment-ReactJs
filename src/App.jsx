
import Home from "./components/Home"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Loading from "./components/Loading"



function App() {


  return (

   <> 
    <div className='relative'>
    <Loading/>
    <Home />
   </div>
   </>
  )
}

export default App
