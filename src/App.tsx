import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Footer from './components/footer'
import ProductsServices from './components/product'
import CallToAction from './components/cta'

function App() {

  return (
    <>
    <div>
      <Navbar />
      <Hero />
      <ProductsServices />
      <CallToAction />
      <Footer />
      </div>
    </>
  )
}

export default App
