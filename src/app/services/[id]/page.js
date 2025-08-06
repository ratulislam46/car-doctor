import dbConnect, { collectionNameObj } from '@/lib/DbConect';
import { ObjectId } from 'mongodb';
import React from 'react'
import SingleServiceDetails from './components/SingleServiceDetails';
import DetailsBanner from './components/DetailsBanner';

export default async function ServicesDetails({ params }) {
    const id = await params;

    const serviceCollection = dbConnect(collectionNameObj.servicesCollection)
    const data = await serviceCollection.findOne({ _id: new ObjectId(id) });

    return (
        <div className='container mx-auto px-2 lg:px-0'>
            <div className='my-12'>
                <DetailsBanner></DetailsBanner>
            </div>
            <SingleServiceDetails data={data}></SingleServiceDetails>
        </div>
    )
}
