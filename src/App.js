import './App.css';
import PayrollForm from './components/payroll form/Payroll Form.jsx';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Link to='/'></Link>
        <Routes>
          <Route path="/" element={<PayrollForm/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
