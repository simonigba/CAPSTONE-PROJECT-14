import Header from './Features/Headers/Header'
import PlanetSection from './Features/Planets/PlanetSection'
import VideoSection from './Features/Videos/VideoSection'
import FactsSection from './Features/Facts/FactsSection'
import ContactForm from './Features/Contacts/ContactForm'
// import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <VideoSection />
      <PlanetSection />
      <FactsSection />
      <ContactForm />
      
      {/* <Footer /> */}
    </div>
  )
}

export default App