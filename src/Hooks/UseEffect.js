import React, { useState, useEffect } from 'react';

function Demo() {

    const [resourceType, setResourceType] = useState('posts');
    const [item, setItem] = useState([])

    console.log(`Render / ${resourceType}`);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItem(json))
    }, [resourceType]);


    return (
        <>
            <div className='pre'>
                <button className='btn btn-primary mx-2 my-2' onClick={() => { setResourceType('posts') }}>Post</button>
                <button className='btn btn-primary mx-2 my-2' onClick={() => { setResourceType('users') }}>User</button>
                <button className='btn btn-primary mx-2 my-2' onClick={() => { setResourceType('comments') }}>Comment</button>
                <h4>{resourceType}</h4>
                <pre>{JSON.stringify(item)}</pre>
            </div>
        </>
    )
}

export default Demo