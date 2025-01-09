import './App.scss'
import { useState, useEffect } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage/HomePage'


function App() {

  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
  }, []);
  
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', String(newMode));
      return newMode;
    });
  };

  return (
    <>
      <main className={`app ${darkMode ? 'dark-mode' : ''}`}>
        <BrowserRouter>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path='/' element={<HomePage darkMode={darkMode} />} />
          <Route />
          <Route />
        </Routes>
        <Footer />
        </BrowserRouter>
      </main>
    </>
  )
}

export default App
