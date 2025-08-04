import React from 'react';

const ServiceData = async () => {
    const res = await fetch("http://localhost:3000/services.json")
    const allData = await res.json();
    // console.log(data);
    return (
        <div>
            {allData.map(data =>
                <div >
                    <h1>{data.description}</h1>
                </div>
            )}
        </div>
    );
};

export default ServiceData;