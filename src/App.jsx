import './index.css'
import { Introduction } from './components/intro.jsx'
import { About } from './components/about.jsx'
import { TechStack } from './components/techStack.jsx'
import { Projects } from './components/projects.jsx'

function App() {

  return (
    <div className="
      flex
      flex-col

      py-8
      px-4
      md:px-48
      lg:px-48
      gap-y-8
    ">
      <Introduction />
      <About />
      <TechStack />
      <Projects />
    </div>
  )
}

export default App
