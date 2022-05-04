import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Level } from './components/Level';
import { Footer } from './components/footer/Footer'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <Router>
      <Level />
      <Footer />
    </Router>
  </>
);

