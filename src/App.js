import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Switch } from 'react-router-dom'
import Home from './components/Home/Home.jsx';
import PayrollForm from './components/Payroll Form/Payroll Form.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route exact path='/payrollform' element={<PayrollForm />}></Route>
          <Route exact path="/payrollform/:id" element={<PayrollForm />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
