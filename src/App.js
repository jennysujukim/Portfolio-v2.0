import { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
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
import Resume from './pages/resume'
import All from './pages/work/All'
import MyNotes from './pages/work/MyNotes'
import DailyProtein from './pages/work/DailyProtein'
import TypaType from './pages/work/TypaType'
import ReFine from './pages/work/ReFine'
import PortfolioBuild from './pages/work/PortfolioBuild'
import TidalFest from './pages/work/TidalFest';
const LazyWork = lazy(() => import('./pages/work'))
const LazyAbout = lazy(() => import('./pages/about'))


function App() {

  const location = useLocation()

  return (
    <div className="App">
      <Header />
      <AnimatePresence
        initial={false}
        mode="wait"
        onExitComplete={() => window.scrollTo(0, 0)}>
        <Routes 
          location={location}
          key={location.pathname}
        >
          <Route 
            path="/" 
            element={ <Home /> }
          />
          <Route 
            path="/about" 
            element={ 
              <Suspense fallback={<PageLoader />}>
                <LazyAbout />
              </Suspense>
            }
          />
          <Route 
            path="/work/" 
            element={ 
              <Suspense fallback={<PageLoader />}>
                <LazyWork />
              </Suspense>
            }
          >
            <Route 
              index 
              element={<All/>} 
            />
            <Route 
              path="all" 
              element={<All />}
            />
            <Route 
              path="daily-protein" 
              element={<DailyProtein />}
            />
            <Route 
              path="typa-type" 
              element={<TypaType />}
            />
            <Route 
              path="my-notes" 
              element={<MyNotes />}
            />
            <Route 
              path="re-fine" 
              element={<ReFine />} 
            />
            <Route 
              path="portfolio-build" 
              element={<PortfolioBuild />} 
            />
            <Route 
              path="tidalfest" 
              element={<TidalFest />} 
            />
          </Route>
          <Route 
            path="/resume" 
            element={ <Resume /> }
          />
          <Route 
            path="*" 
            element={ <NotFound /> }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
)}

export default App;