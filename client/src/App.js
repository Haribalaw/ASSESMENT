import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Register } from './components/register';
import { Dashboard } from './components/dashboard';
import { Login } from './components/login';


function App() {
  return (
       <div>
        <BrowserRouter>
                 <Routes>
                      <Route path="/" element={<Register/>}/>
                     <Route path="/login" element={<Login/>}/>
                     <Route path="/dashboard" element={<Dashboard/>}/>
                 </Routes>
        </BrowserRouter>
                    
       </div>
    
  );
}

export default App;
