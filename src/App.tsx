// import logo from '../file.svg'
import { About, Header, Main, Projects, Section, ShinyText } from './components'

function App() {
  return (
    <Main>
      <Header>
        <div>
          <p {...{ className: 'flow' }}>boyan d.</p>

          <Section {...{ className: 'position' }}>
            <ShinyText {...{ text: 'software engineer', speed: 3 }} />
          </Section>
        </div>

      </Header>

      <Section {...{ className: 'about-container' }}>
        <About />
      </Section>

      <Section {...{ className: 'projects' }}>
        <Projects />
      </Section>

    </Main>
  )
}

export default App
