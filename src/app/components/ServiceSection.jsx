import Image from 'next/image';
import React from 'react';

const ServiceData = async () => {
    const res = await fetch("http://localhost:3000/services.json")
    const allData = await res.json();
    // console.log(data);
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
            {allData.map(data =>
                <div key={data._id}>
                    <Image src={data.img}
                        width={200}
                        height={200}
                        alt={data.title}>
                    </Image>
                </div>
            )}
        </div>
    );
};

export default ServiceData;