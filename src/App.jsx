import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage';
import './App.scss'

function App() {
  return (
    <div className="application-container">
      <Routes>
         <Route path='/' element={<MainPage />}  />
      </Routes>
    </div>
  );
}

export default App;
