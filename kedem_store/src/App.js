
import './App.css';
import './assets/css/main.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductInfo from './pages/ProductInfo';
import Login from './pages/login';
import Profile from './pages/Profile';
import Shop from './pages/Shop';
import Register from './pages/Register';
import Wishlist from './pages/Wishlist';
import UserDashboard from './pages/UserDashboard';
import Account from './pages/Accoount';
import Checkout from './pages/Checkout';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<HomePage />}></Route>
          <Route exact path='product/:id' element={<ProductInfo />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/register' element={<Register />}></Route>
          <Route exact path='/user/profile' element={<Profile />}></Route>
          <Route exact path='/shop' element={<Shop />}></Route>
          {/* <Route exact path='/profile/cart' element={<Wishlist />}></Route> */}

          <Route exact path='/user' element={<Account />}></Route>
          <Route exact path='/user/wishlist' element={<Wishlist />}></Route>
          <Route exact path='/user/checkout' element={<Checkout />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div >
  );
}

export default App;
