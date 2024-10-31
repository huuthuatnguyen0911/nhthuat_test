import './styles/index.css'
import Banner from './components/Banner'
import HowItWorksSection from './components/HowItWorksSection'
import Footer from './components/Footer'

export default function Component() {
  return (
    <div className='min-h-screen text-white p-7 md:p-4'>
      <div className='max-w-7xl mx-auto'>
        <Banner />
        <HowItWorksSection />
        <Footer />
      </div>
    </div>
  )
}
