import Footer from "./app/components/Footer"
import Header from "./app/components/Header"
import HighLisghtSection from "./app/components/HighLightSection"
import Section from "./app/components/Section"

function App() {

  return (
    <div className="wrapper">
      <Header />
      <main style={{ marginTop: '8rem' }}>
        <HighLisghtSection />
        <Section title="Recomendados para você" />
        <Section title="Para toda familia" />
      </main>
      <Footer />
    </div>
  )
}

export default App
