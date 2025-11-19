import Hero from '../components/Hero'
import About from '../components/About'
import HowItWorks from '../components/HowItWorks'
import NeedHelp from '../components/NeedHelp'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About showHero={false} />
      </section>
      <section id="properties">
        <HowItWorks />
      </section>
      <section id="contact">
        <NeedHelp />
      </section>
      <Footer />
    </>
  )
}

export default Home

