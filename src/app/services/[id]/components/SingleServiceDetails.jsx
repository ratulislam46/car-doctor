import Image from 'next/image';
import React from 'react';

const SingleServiceDetails = ({ data }) => {
    const { title, img, price, description, facility } = data;
    console.log(title);

    return (
        <div className='flex justify-center gap-6 my-12'>
            {/* right side  */}
            <div className='w-2/3 space-y-7'>

                {/* image  */}
                <Image
                    src={img}
                    alt={title}
                    width={600}
                    height={400}
                    className='rounded-xl'
                ></Image>

                {/* details  */}
                <div className='space-y-7'>
                    <h1 className='text-4xl font-bold'>{title}</h1>
                    <p className='text-gray-500'>{description}</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {facility?.map((f, i) => (
                            <div key={i}
                                className='border-t-2 border-orange-500 bg-gray-100 p-10 rounded-xl'
                            >
                                <h3 className='font-bold text-xl'>{f.name}</h3>
                                <p className='text-gray-500'>{f.details}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* left side  */}
            <div className='w-1/3 border border-gray-200 p-1 rounded-md'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, consequuntur dolorum! Eius laborum illum cum, repudiandae eligendi culpa? Minus, dignissimos?
            </div>
        </div>
    );
};

export default SingleServiceDetails;