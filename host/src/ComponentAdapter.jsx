
import React from 'react'
import VueAdapter from './VueAdapter';
import SvelteAdapter from './SevelteAdapter';

export default function ComponentAdapter({framework,Component}) {
    let instance;
    switch (framework) {
        case 'vue':
            return <VueAdapter Component={Component}/>
        case 'svelte':
            return <SvelteAdapter Component={Component}/>
    }

}
