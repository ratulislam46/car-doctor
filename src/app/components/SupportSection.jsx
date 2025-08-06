'use client'
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const SupportSection = () => {

    return (
        <div>
            {/* support section title and description  */}
            <h4 className='text-[#FF3811] font-bold text-xl text-center'>Core Features</h4>
            <h2 className='font-bold text-4xl text-center mt-4'>Why Choose Us</h2>
            <p className='text-gray-500 text-center mt-8 mb-12'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

            {/* feature section  */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">

                {/* box-1  */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                    className='p-4 border border-gray-200 flex flex-col items-center justify-center rounded-md hover:bg-orange-500 hover:text-white'>
                    <Image
                        src='/assets/icons/group.svg'
                        alt='team'
                        width={50}
                        height={50}
                        className="mx-auto mb-2"
                    />
                    <p className="text-sm font-medium">Expert Team</p>
                </motion.div>
                {/* box-2  */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                    className='p-4 border border-gray-200 flex flex-col items-center justify-center rounded-md bg-orange-500 text-white'>
                    <Image
                        src='/assets/icons/clock.svg'
                        alt='team'
                        width={50}
                        height={50}
                        className="mx-auto mb-2"
                    />
                    <p className="text-sm font-medium">Timely Delivery</p>
                </motion.div>

                {/* box-3  */}
                <motion.div
                    initial={{ opacity: 0, y: 110 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                    className='p-4 border border-gray-200 flex flex-col items-center justify-center rounded-md hover:bg-orange-500 hover:text-white'>
                    <Image
                        src='/assets/icons/person.svg'
                        alt='team'
                        width={50}
                        height={50}
                        className="mx-auto mb-2"
                    />
                    <p className="text-sm font-medium">24/7 Support</p>
                </motion.div>

                {/* box-4  */}
                <motion.div
                    initial={{ opacity: 0, y: 140 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                    className='p-4 border border-gray-200 flex flex-col items-center justify-center rounded-md hover:bg-orange-500 hover:text-white'>
                    <Image
                        src='/assets/icons/Wrench.svg'
                        alt='team'
                        width={50}
                        height={50}
                        className="mx-auto mb-2"
                    />
                    <p className="text-sm font-medium">Best Equipment</p>
                </motion.div>

                {/* box-5  */}
                <motion.div
                    initial={{ opacity: 0, y: 180 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                    className='p-4 border border-gray-200 flex flex-col items-center justify-center rounded-md hover:bg-orange-500 hover:text-white'>
                    <Image
                        src='/assets/icons/check.svg'
                        alt='team'
                        width={50}
                        height={50}
                        className="mx-auto mb-2"
                    />
                    <p className="text-sm font-medium">Expert Team</p>
                </motion.div>

                {/* box-6  */}
                <motion.div
                    initial={{ opacity: 0, y: 210 }}
                    whileInView={{ opacity: 4, y: 0 }}
                    transition={{ duration: 2.0, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 , }}
                    className='p-4 border border-gray-200 flex flex-col items-center justify-center rounded-md hover:bg-orange-500 hover:text-white'>
                    <Image
                        src='/assets/icons/deliveryt.svg'
                        alt='team'
                        width={50}
                        height={50}
                        className="mx-auto mb-2"
                    />
                    <p className="text-sm font-medium">Home Delivery</p>
            </motion.div>
        </div>
        </div >
    );
};

export default SupportSection;