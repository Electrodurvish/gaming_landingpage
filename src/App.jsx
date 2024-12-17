import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/navbar'
import Features from './components/Features'
import FloatingImage from './components/Story'
import Contact from './components/contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='relative w-screen min-h-screen overflow-x-hidden bg-blue-50'>
      <Navbar/>
      <Hero/>
     <About/>
     <Features/>
      <FloatingImage/>
      <Contact/>
      <Footer/>
    </main>
  )
  
}

export default App