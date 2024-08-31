import React, { useEffect, useRef } from 'react'
import { createApp } from 'vue';
export default function VueAdapter({Component,props}) {
    const vueRef = useRef(null);

    useEffect(() => {
        if (vueRef.current) {
            const app = createApp(Component, props);
            app.mount(vueRef.current);
        }
    }, [Component, props]);

    return <div ref={vueRef}></div>;
}
