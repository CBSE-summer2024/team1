import React, { useEffect, useRef } from 'react';

const SvelteAdapter = ({ Component, props }) => {
    const containerRef = useRef(null);
    let svelteInstance = useRef(null);

    useEffect(() => {
        svelteInstance.current = new Component({
            target: containerRef.current,
            props,
        });

        return () => {
            if (svelteInstance.current) {
                svelteInstance.current.$destroy();
            }
        };
    }, [Component]);

    return <div ref={containerRef}></div>;
};

export default SvelteAdapter;
