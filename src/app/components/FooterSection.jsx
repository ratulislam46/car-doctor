import Image from 'next/image';
import React from 'react';

const FooterSection = () => {
    return (
        <div className='text-white bg-gray-950'>
            <div className='container mx-auto'>
                <footer className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className='space-y-3'>
                        <Image
                            src='/assets/logo.svg'
                            width={70}
                            height={54}
                            alt='logo'>
                        </Image>
                        <p>
                            Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .
                            <br />
                            Providing reliable tech since 1992
                        </p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default FooterSection;