import About from './about/About'
import Hero from './components/Hero'
import Separator from './components/Separator'
import Contact from './contact/Contact'
import Experience from './experience/Experience'
import Projects from './projects/Projects'

export default async function Home() {
  return (
    <div className="h-full w-full grid place-items-center overflow-y-auto scroll-smooth">
      <Hero />
      <Separator title="About" />
      <About />
      <Separator title="Projects" />
      <Projects />
      <Separator title="Experience" />
      <Experience />
      <Separator title="Contact" />
      <Contact />
    </div>
  )
}
