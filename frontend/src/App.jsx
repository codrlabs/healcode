import './App.css'
import LandingPage from './landingPage';
import ScanResults from './ScanResults.jsx'

function App() {
  const pathname = window.location.pathname
  if (pathname === '/scan-results') {
    return <ScanResults />
  }
  return <LandingPage />
}

export default App
