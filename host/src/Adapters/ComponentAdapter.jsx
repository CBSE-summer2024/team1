
import React from 'react'
import VueAdapter from './VueAdapter';
import SvelteAdapter from './SvelteAdapter';

export default function ComponentAdapter({framework,Component,props}) {
    let instance;
    switch (framework) {
        case 'vue':
            return <VueAdapter Component={Component} props={props}/>
        case 'svelte':
            return <SvelteAdapter Component={Component} props={props}/>
    }

}
