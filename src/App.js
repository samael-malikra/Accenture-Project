
import './App.css';
import Navbar from './Components/Navbar'
import Explore from './Components/Explore';
import Chat from './Components/Chat';
import Setting from './Components/Setting';
import About from './Components/About';

import {  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
      

      <Routes>
        <Route path="/chat" element={<Chat/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/setting" element={<Setting/>} />
        <Route path="/explore" element={<Explore/>} />
          
      </Routes>
    </div>
    </Router>
  );
}

export default App;
