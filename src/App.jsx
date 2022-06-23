import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage';
import CookiePreferencesModal from './components/items-components/cookie-preferences-modal/CookiePreferencesModal';
import EnterPassword from './components/items-components/enter-password/EnterPassword';
import ProfilePageHeader from './components/items-components/profile-page-header/ProfilePageHeader';
import DropdownAndSearch from './components/items-components/dropdown-and-search/DropdownAndSearch';
import ProductInfoUiDesign from './components/items-components/product-info-ui-design/ProductInfoUiDesign';
import FilterModal from './components/items-components/filter-modal/FilterModal';
import PricingCard from './components/items-components/pricing-card/PricingCard';
import './App.scss'

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
            <Route path='product-info-ui-design' element={<ProductInfoUiDesign />} />
            <Route path='filter-modal' element={<FilterModal />} />
            <Route path='pricing-card' element={<PricingCard />} />
         </Route> 
      </Routes>
    </div>
  );
}

export default App;
