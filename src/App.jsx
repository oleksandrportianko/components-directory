import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage';
import CookiePreferencesModal from './components/items-components/cookie-preferences-modal/CookiePreferencesModal';
import EnterPassword from './components/items-components/enter-password/EnterPassword';
import './App.scss'
import ProfilePageHeader from './components/items-components/profile-page-header/ProfilePageHeader';
import DropdownAndSearch from './components/items-components/dropdown-and-search/DropdownAndSearch';

function App() {
  return (
    <div className="application-container">
      <Routes>
         <Route path='/' element={<MainPage />}  />
         <Route path='/component/' >
            <Route path='enter-password-ui' element={<EnterPassword />} />
            <Route path='cookie-preferences-modal' element={<CookiePreferencesModal />} />
            <Route path='profile-page-header' element={<ProfilePageHeader />} />
            <Route path='dropdown-and-search' element={<DropdownAndSearch />} />
         </Route> 
      </Routes>
    </div>
  );
}

export default App;
