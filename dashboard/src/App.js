import { Routes, Route } from 'react-router-dom'; // Remove "BrowserRouter as Router"
// import LoginPage from './LoginPage';
// import Signup from './Signup';
import Home from "./components/Home";
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";

function App() {
  return (
    <Routes>
       <Route path="/*" element={<Home />} />
       
     
    </Routes>
  );
}

export default App;