import Footer from './components/footer'
import Header from './components/header'
import Nav from './components/nav'
import Section1 from './components/section-1'
import Section2 from './components/section-2'
import Section3 from './components/section-3'

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-10">
      <Nav />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  )
}
