import './App.css';
import {useState} from "react"
import Login from "./components/login/login"
import LandingPage from "./components/landingPage/LandingPage"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div  >
      {isLoggedIn ? <LandingPage/> : 
       <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      }
      
    </div>
  );
}

export default App;
