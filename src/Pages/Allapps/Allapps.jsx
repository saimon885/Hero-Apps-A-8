import React, { use } from 'react';
import SingleApp from './SingleApp';

const Allapps = ({homeData}) => {
    const Apps = use(homeData)
    // console.log(Allapps);
    return (
        <div>
            <div className='mt-5 mx-5 flex justify-between items-center'>
                <div className='text-2xl font-semibold'>({Apps.length}) Apps Found</div>
                <div>
                    <input className='border px-3 py-1 w-70' type="search" placeholder='search Apps' name="" id="" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-5 my-5">
           {
            Apps.map(app => <SingleApp key={app.id} app={app}></SingleApp>)
           }
        </div>
        </div>
    );
};

export default Allapps;