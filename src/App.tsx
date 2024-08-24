import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Footer from './components/footer'
import ProductsServices from './components/product'
import CallToAction from './components/cta'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RequestQuote from './components/pages/requestQoute';

function App() {

  return (
    <Router>
      <Routes>
        {/* Routes for the main layout */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <ProductsServices />
              <CallToAction />
              <Footer />
            </>
          }
        />
        {/* Add more routes for pages with the main layout if needed */}
        
        {/* Route for the Request Quote page without other components */}
        <Route path="/request-quote" element={<RequestQuote />} />
      </Routes>
    </Router>
  )
}

export default App


