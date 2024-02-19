import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './Navbar';
import Home from "./components/pages/Home";
import Exams from "./components/pages/Exams";
import Admin from "./components/pages/Admin";
import PatientDetails from "./components/pages/PatientDetails"


import { useApi } from './hooks/use-api';

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
          <Route path='/patient/:id' element={<PatientDetails />} />
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
