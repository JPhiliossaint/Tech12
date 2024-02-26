import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './Navbar';
import Home from "./components/pages/Home";
import Exams from "./components/pages/Exams";
import Admin from "./components/pages/Admin";
import PatientDetails from './PatientDetails';
import Update from './Update';

import { useApi } from './hooks/use-api';
import Modal from './TableData/Modal';

function App() {
  const { response } = useApi();

  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/exams' element={<Exams />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/patientdetails/:id' element= {< PatientDetails/>} />
          <Route path='/admin/:id' element={< Update/>} />
          <Route path='/delete/:id' element={<Modal/>}/>
        </Routes>
      </div>
      <header className="App-header">
        <p>
          {response}
        </p>
      </header>
    </div>
  );
}

export default App;
