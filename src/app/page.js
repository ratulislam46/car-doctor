import ServiceSection from '@/app/components/ServiceSection'

export default async function Home() {

  return (
    <div className='container mx-auto'>
      <section className='mt-12 flex justify-center'>
        <ServiceSection></ServiceSection>
      </section>
    </div>
  )
}
