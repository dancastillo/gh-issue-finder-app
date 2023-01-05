import React from 'react'
import Container from 'react-bootstrap/Container'
import './App.css'
import DefaultPage from './pages/DefaultPage';

function App() {
  return (
    <Container className="pt-5">
      <h3 className="text-center pb-3">Github Issue Finder</h3>
      <DefaultPage />
    </Container>
  )
}

export default App
