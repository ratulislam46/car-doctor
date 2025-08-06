import Image from 'next/image';
import React from 'react';

const DetailsBanner = () => {
    return (
        <div>
            <Image
                src='/assets/images/checkout/checkout.png'
                width={1130}
                height={300}
                alt='banner'
            />
        </div>
    );
};

export default DetailsBanner;