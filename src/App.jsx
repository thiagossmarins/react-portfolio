import React from 'react'
import Header from "./components/Header/Header";
import Home from './components/Home/Home'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import VideoBackground from './components/VideoBackground/VideoBackground'
import ScrollAnimation from './components/ScrollAnimation/ScrollAnimation'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


const App = () => {
  return (
    <div className='App'>
      <div className='App'>
        <VideoBackground />
        <ScrollAnimation />
        <Header />
        <section className='js-scroll'>
          <Home />
        </section>
        <section className='js-scroll'>
          <Skills />
        </section>
        <section className='js-scroll'>
          <Projects />
        </section>
        <section className='js-scroll'>
          <Form />
        </section>
        <Footer />
      </div>
    </div>
  )
}

export default App