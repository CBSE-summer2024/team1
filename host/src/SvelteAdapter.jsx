import React, { useEffect, useRef } from 'react';
const SvelteAdapter = ({ Component, props }) => {
    const containerRef = useRef(null);
    let svelteInstance;

    useEffect(() => {
        svelteInstance = Component  
        const app = new Component({
            target: containerRef.current,
        });
        return () => {
            if (app) {
                app.$destroy();
            }
        };
    }, [Component, props]);

    return <div ref={containerRef}></div>;
};

export default SvelteAdapter;
