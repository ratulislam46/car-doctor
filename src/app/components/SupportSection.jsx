import Image from 'next/image';
import React from 'react';

const SupportSection = async () => {

    return (
        <div>
            {/* support section title and description  */}
            <h4 className='text-[#FF3811] font-bold text-xl text-center'>Core Features</h4>
            <h2 className='font-bold text-4xl text-center mt-4'>Why Choose Us</h2>
            <p className='text-gray-500 text-center mt-8 mb-12'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

            {/* feature section  */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">

                {/* box-1  */}
                <div className='p-4 border border-gray-200 flex flex-col items-center justify-center rounded-md hover:bg-orange-500 hover:text-white'>
                    <Image
                        src='/assets/icons/group.svg'
                        alt='team'
                        width={50}
                        height={50}
                        className="mx-auto mb-2"
                    />
                    <p className="text-sm font-medium">Expert Team</p>
                </div>
                {/* box-2  */}
                <div className='p-4 border border-gray-200 flex flex-col items-center justify-center rounded-md bg-orange-500 text-white'>
                    <Image
                        src='/assets/icons/clock.svg'
                        alt='team'
                        width={50}
                        height={50}
                        className="mx-auto mb-2"
                    />
                    <p className="text-sm font-medium">Timely Delivery</p>
                </div>

                {/* box-3  */}
                <div className='p-4 border border-gray-200 flex flex-col items-center justify-center rounded-md hover:bg-orange-500 hover:text-white'>
                    <Image
                        src='/assets/icons/person.svg'
                        alt='team'
                        width={50}
                        height={50}
                        className="mx-auto mb-2"
                    />
                    <p className="text-sm font-medium">24/7 Support</p>
                </div>

                {/* box-4  */}
                <div className='p-4 border border-gray-200 flex flex-col items-center justify-center rounded-md hover:bg-orange-500 hover:text-white'>
                    <Image
                        src='/assets/icons/Wrench.svg'
                        alt='team'
                        width={50}
                        height={50}
                        className="mx-auto mb-2"
                    />
                    <p className="text-sm font-medium">Best Equipment</p>
                </div>

                {/* box-5  */}
                <div className='p-4 border border-gray-200 flex flex-col items-center justify-center rounded-md hover:bg-orange-500 hover:text-white'>
                    <Image
                        src='/assets/icons/check.svg'
                        alt='team'
                        width={50}
                        height={50}
                        className="mx-auto mb-2"
                    />
                    <p className="text-sm font-medium">Expert Team</p>
                </div>

                {/* box-6  */}
                <div className='p-4 border border-gray-200 flex flex-col items-center justify-center rounded-md hover:bg-orange-500 hover:text-white'>
                    <Image
                        src='/assets/icons/deliveryt.svg'
                        alt='team'
                        width={50}
                        height={50}
                        className="mx-auto mb-2"
                    />
                    <p className="text-sm font-medium">Home Delivery</p>
                </div>
            </div>
        </div>
    );
};

export default SupportSection;