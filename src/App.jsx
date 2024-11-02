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
        lg:px-80
        xl:px-80
        gap-y-16
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
