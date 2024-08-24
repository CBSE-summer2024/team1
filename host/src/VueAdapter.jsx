import React, { useEffect, useRef } from 'react'
import { createApp } from 'vue';
export default function VueAdapter({Component}) {
    const vueRef = useRef(null);

    useEffect(() => {
        if (vueRef.current) {
            const app = createApp(Component);
            app.mount(vueRef.current);
        }
    }, []);

    return <div ref={vueRef}></div>;
}
