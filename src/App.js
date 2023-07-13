import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './hooks/useScrollToTop';

// styles
import './App.scss';

// components
import Header from './components/Header'
import Footer from './components/Footer'
import Terminal from './components/Terminal';
import PageLoader from './components/PageLoader';

// pages
import Home from './pages/home'
import About from './pages/about'
import Work from './pages/work'
import NotFound from './pages/notfound'


function App() {

  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      document.addEventListener('DOMContentLoaded', handleLoad);
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', handleLoad);
    };
  }, []);

  return (
    <div className="App">
      {loading && ( <PageLoader />)}
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/work/:id" element={<Work />}/>
        <Route path="/terminal" element={<Terminal />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
