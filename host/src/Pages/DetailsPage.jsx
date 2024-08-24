import React from 'react'
import {App} from 'DecideTeam/DecideTeam'
import { useParams } from 'react-router-dom'
export default function DetailsPage() {
    const {id} = useParams();
    return (
        <>
            <h1>this page for product with id {id}</h1>
            <App />
        </>
        
    )
}
