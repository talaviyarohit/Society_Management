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
import Dashboard from './components/Dashboard/Dashboard';
import DashboardDetail from './components/Dashboard/DashboardDetail';
 import Owner from './components/Resident_management/Owner';
// import Dashboard from './components/Dashboard/Dashboard';
 import Tenant from './components/Resident_management/Tenant';
import { Statuspopup } from './components/Resident_management/Status_popup';
import { ResidenceSatatusPopup } from './components/Resident_management/Residence_status_popup';
import { DeletePopup } from './components/Resident_management/Delete_popup';
import { ViewOwner } from './components/Resident_management/ViewOwner';
import { ViewTenant } from './components/Resident_management/ViewTenant';
import ResidentTable from './components/Resident_management/ResidentTable';





function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/otppage" element={<OtpPage />} />
          <Route path="/resetpassword" element={<Resetpassword />} />
          <Route path='/registration' element={<RegistrationForm />} />
          <Route path='/dashboard' element={<Dashboard />}>
            <Route path='DashboardDetail' element={<DashboardDetail />} />
          </Route>

        </Routes>
      </Router>

      {/* <Dashboard/>*/}
<Owner/>
      <Tenant/> 

<ResidentTable/>
      <Statuspopup/>

      <ResidenceSatatusPopup/>

      <DeletePopup/>

      <ViewOwner/>
      <ViewTenant/>
    </>

  );
}

export default App;
