
import './App.css';
import './assets/css/main.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductInfo from './pages/ProductInfo';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<HomePage />}></Route>
          <Route exact path='product/:id' element={<ProductInfo />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div >
  );
}

export default App;
