import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import './app.scss';
import Footer from './components/Footer/Footer';
import Films from './pages/Films/Films';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Films />} />
      </Routes>
      <Footer />
    </div>
  );
};
