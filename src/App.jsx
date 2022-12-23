import React from 'react'

// Another way of importing is by creating a index.js file and exporting from there
import { About, Footer, Testimonial, Header, Skills, Work } from './container'
import { Navbar } from './components'
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  )
}

export default App