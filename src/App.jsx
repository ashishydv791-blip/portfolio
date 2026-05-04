import './styles/globals.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { portfolioData } from './data/mockData'

export default function App() {
  return (
    <>
      <Header />
      <section id="home">
        <Hero data={portfolioData.personal} />
      </section>
      <Projects projects={portfolioData.projects} />
      <Skills skills={portfolioData.skills} />
      <Experience experience={portfolioData.experience} />
      <Contact data={portfolioData.personal} />
      <Footer />
    </>
  )
}
