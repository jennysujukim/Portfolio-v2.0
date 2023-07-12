import { Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './hooks/useScrollToTop';

// styles
import './App.scss';

// components
import Header from './components/Header'
import Footer from './components/Footer'

// pages
import Home from './pages/home'
import About from './pages/about'
import Work from './pages/work'
import NotFound from './pages/notfound'

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/work/:id" element={<Work />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
