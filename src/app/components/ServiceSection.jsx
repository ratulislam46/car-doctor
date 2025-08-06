import React from 'react';
import dbConnect, { collectionNameObj } from '@/lib/DbConect';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";

const ServiceData = async () => {
    // const res = await fetch("http://localhost:3000/services.json")
    // const allData = await res.json();
    // console.log(data);

    const serviceCollection = dbConnect(collectionNameObj.servicesCollection)
    const allData = await serviceCollection.find({}).toArray();
    // console.log(allData);

    return (
        <div>
            {/* service section title and description  */}
            <h4 className='text-[#FF3811] font-bold text-xl text-center'>Service</h4>
            <h2 className='font-bold text-4xl text-center mt-4'>Our Service Area</h2>
            <p className='text-gray-500 text-center mt-8 mb-12'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

            {/* sevices image  */}
            <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
                {allData.map(data =>
                    <div key={data._id} className='border border-gray-200 rounded-xl p-4 space-y-4'>

                        {/* image  */}
                        <div>
                            <Image
                                src={data.img}
                                width={314}
                                height={208}
                                alt={data.title}>
                            </Image>
                        </div>

                        {/* title and price  */}
                        <div>
                            <h1 className='text-2xl font-bold text-gray-500'>{data.title}</h1>
                            <div className='flex justify-between text-[#FF3811] font-semibold text-xl'>
                                <h3>Price : ${data.price}</h3>
                                <Link href={`services/${data._id}`}>
                                    <FaArrowRight />
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ServiceData;