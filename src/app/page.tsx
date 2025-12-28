import { Footer, Header, Hero, Steps, Catalog, Pricing, Reviews } from '@/components/landing'
import { GoogleAuthTestButton } from '@/components/landing/GoogleAuthTestButton'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <GoogleAuthTestButton />
      <Steps />
      <Catalog />
      <Pricing />
      <Reviews />
      <Footer />
    </>
  )
}
