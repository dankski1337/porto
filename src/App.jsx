import './index.css'
import { Introduction } from './components/sections/intro.jsx'
import { About } from './components/sections/about.jsx'
import { TechStack } from './components/sections/techStack.jsx'
import { Projects } from './components/sections/projects.jsx'
import { Footer } from './components/footer.jsx'

function App() {

  return (
    <>
      <div className="
        flex
        flex-col
        px-8
        md:px-64
        lg:px-64
        gap-y-8
        min-h-screen
      ">
        <Introduction />
        <About />
        <TechStack />
        <Projects />
      </div>
      <Footer />
    </>
  )
}

export default App
