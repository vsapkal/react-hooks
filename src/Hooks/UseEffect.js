import React, { useState, useEffect } from 'react';

function Demo() {

    const [resourceType, setResourceType] = useState('posts');

    console.log(`Render / ${resourceType}`);
    useEffect(() => {
        console.log("Resource Changed");
        return () => {
            console.log("Return from resource change");
        }
    }, [resourceType]);


    return (
        <>
            <div>
                <button className='btn btn-primary mx-2 my-2' onClick={() => { setResourceType('posts') }}>Post</button>
                <button className='btn btn-primary mx-2 my-2' onClick={() => { setResourceType('users') }}>User</button>
                <button className='btn btn-primary mx-2 my-2' onClick={() => { setResourceType('comments') }}>Comment</button>
                <h4>{resourceType}</h4>
            </div>
        </>
    )
}

export default Demo