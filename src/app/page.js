import ServiceSection from '@/app/components/ServiceSection'
import CustomerSaySection from './components/CustomerSaySection'
import SupportSection from './components/SupportSection'

export default async function Home() {

  return (
    <div className='container mx-auto'>
      <section className='mt-12 flex justify-center'>
        <ServiceSection></ServiceSection>
      </section>
      <section className='mt-12 flex justify-center'>
        <SupportSection></SupportSection>
      </section>
      <section className='mt-12 flex justify-center'>
        <CustomerSaySection></CustomerSaySection>
      </section>
    </div>
  )
}
