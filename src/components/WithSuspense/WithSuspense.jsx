import React,{Suspense} from 'react';

const WithSuspense = (Component) => {
    return (props)=>(

        <Suspense fallback={<div>Loading...</div>}>
            <Component {...props}/>
        </Suspense>
    );
};

export default WithSuspense;