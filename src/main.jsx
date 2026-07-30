import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Page from './App.jsx'
import Container from './Container.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container>
      <Page />
    </Container>
  </StrictMode>
)
