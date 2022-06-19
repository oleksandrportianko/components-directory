import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage';
import EnterPassword from './components/items-components/EnterPassword';
import './App.scss'

function App() {
  return (
    <div className="application-container">
      <Routes>
         <Route path='/' element={<MainPage />}  />
         <Route path='/component/' >
            back
            <Route path='enter-password-ui' element={<EnterPassword />} />
         </Route> 
      </Routes>
    </div>
  );
}

export default App;
