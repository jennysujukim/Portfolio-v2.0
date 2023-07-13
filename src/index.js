import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// styles
import './index.scss';

// components
import App from './App';
import { ScrollToTop } from './hooks/useScrollToTop';
import PageLoader from './components/PageLoader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
        <ScrollToTop />
        <React.Suspense fallback={<PageLoader />}>
          <App />
        </React.Suspense>
    </React.StrictMode>
  </BrowserRouter>
);
