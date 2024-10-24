import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Login from './components/Login/Login';
import ForgetPassword from './components/Login/Forget-password';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import OtpPage from './components/Login/Forget-otp';
import Resetpassword from './components/Login/Resetpassword';
import RegistrationForm from './components/Registration/Registration';



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/otppage" element={ <OtpPage/>} />
        <Route path="/resetpassword" element={  <Resetpassword/>} />
        <Route path='/registration' element={<RegistrationForm/>}/>
      </Routes>
    </Router>
   
   
    </> 
    
  );
}

export default App;
