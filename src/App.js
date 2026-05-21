import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Backoffice from './backoffice/App';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/backoffice/*" element={<Backoffice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
