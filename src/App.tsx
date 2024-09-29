import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Footer from './components/footer'
import ProductsServices from './components/product'
import CallToAction from './components/cta'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RequestQuote from './components/pages/requestQoute';

function App() {

  return (
    <Router>
      <Routes>
       
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
        
        <Route path="/request-quote" element={<RequestQuote />} />
      </Routes>
    </Router>
  )
}

export default App


