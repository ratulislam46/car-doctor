import dbConnect from '@/lib/DbConect';
import Image from 'next/image';
import React from 'react';

const ServiceData = async () => {
    // const res = await fetch("http://localhost:3000/services.json")
    // const allData = await res.json();
    // console.log(data);

    const serviceCollection = dbConnect('paracticeData')
    const allData = await serviceCollection.find({}).toArray();

    return (
        <div>
            {/* service section title and description  */}
            <h4 className='text-[#FF3811] font-bold text-xl text-center'>Service</h4>
            <h2 className='font-bold text-4xl text-center mt-4'>Our Service Area</h2>
            <p className='text-gray-500 text-center mt-8 mb-12'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

            {/* sevices image  */}
            <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
                {allData.map(data =>
                    <div key={data._id}>
                        <Image src={data.img}
                            layout="responsive"
                            width={600}   
                            height={400}
                            alt={data.title}>
                        </Image>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ServiceData;