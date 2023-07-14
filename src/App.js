import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ScrollToTop } from './hooks/useScrollToTop';
import { AnimatePresence } from 'framer-motion'

// styles
import './App.scss';

// components
import Header from './components/Header'
import Footer from './components/Footer'
import PageLoader from './components/PageLoader'


// pages
import Home from './pages/home'
import NotFound from './pages/notfound'
import Terminal from './pages/terminal'
// import Work from './pages/work'
// import About from './pages/about';
const LazyWork = lazy(() => import('./pages/work'))
const LazyAbout = lazy(() => import('./pages/about'))


function App() {

  return (

<div className="App">
  <Header />
  <AnimatePresence>
    <Routes>
      <Route 
        path="/" 
        element={ <Home /> }/>
      <Route 
        path="/about" 
        element={ 
          <Suspense fallback={<PageLoader />}>
            <LazyAbout />
          </Suspense>
          }/>
      <Route 
        path="/work/:id" 
        element={ 
          <Suspense fallback={<PageLoader />}>
            <LazyWork />
          </Suspense>
          }/>
      <Route 
        path="/terminal" 
        element={ <Terminal /> }/>
      <Route 
        path="*" 
        element={ <NotFound /> }/>
    </Routes>
  </AnimatePresence>
  <ScrollToTop />
  <Footer />
</div>

    )


}

export default App;
