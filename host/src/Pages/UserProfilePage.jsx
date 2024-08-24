import Remote from "UserManagementTeam/App"
import React from 'react'
import ComponentAdapter from "../Adapters/ComponentAdapter";

export default function UserProfilePage() {
    const vueComponentProps = {
        CONTAINER: 'container-class',
        NAME: 'MyApp',
        FRAMEWORK: 'Vue.js',
        LANGUAGE: 'TypeScript',
        CSS: 'CSS',
    };
    
    return (
        <ComponentAdapter framework={'vue'} Component={Remote} props={vueComponentProps}/>
    )
}
