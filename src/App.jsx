import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'

export default function App() {
  const [language, setLanguage] = useState('pt')

  return (
    <Routes>
      <Route path="/" element={<Home language={language} setLanguage={setLanguage} />} />
      <Route path="/contact" element={<Contact language={language} setLanguage={setLanguage} />} />
    </Routes>
  )
}
