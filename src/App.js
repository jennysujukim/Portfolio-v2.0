import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './hooks/useScrollToTop';

// styles
import './App.scss';

// components
import Header from './components/Header'
import Footer from './components/Footer'
import Terminal from './components/Terminal'
import PageLoader from './components/PageLoader'


// pages
import Home from './pages/home'
import About from './pages/about'
import NotFound from './pages/notfound'
const LazyWork = lazy(() => import('./pages/work'))



function App() {


  return (

<div className="App">
<Header />
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/about" element={<About />}/>
  <Route path="/work/:id" element={<Suspense fallback={<PageLoader />}><LazyWork /></Suspense>}/>
  <Route path="/terminal" element={<Terminal />}/>
  <Route path="*" element={<NotFound />}/>
</Routes>
<ScrollToTop />
<Footer />
</div>

    )


}

export default App;
