import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import './app.scss';
import Footer from './components/Footer/Footer';
import Films from './pages/Films/Films';
import Series from './pages/Series/Series';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Films />} />
        <Route path="/series" element={<Series />} />
      </Routes>
      <Footer />
    </div>
  );
};
