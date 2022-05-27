import React, { useState, useEffect } from 'react';

function Demo() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        /* Here hard to check the event is removed or not.  */
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return (
        <>
            <div className='pre'>
                <h3>Width : {windowWidth}</h3>
                <h3>Height : {windowHeight}</h3>
            </div>
        </>
    )
}

export default Demo