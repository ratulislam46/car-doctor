import ServiceData from "./components/ServiceData";

export default async function Home() {

  return (
    <div>
      <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <ServiceData></ServiceData>
      </section>
    </div>
  )
}
