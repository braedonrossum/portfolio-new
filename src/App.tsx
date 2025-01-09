import './App.scss'

import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage'
import ProjectPage from './pages/ProjectPage/ProjectPage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
