import React, { useEffect, useState } from 'react'
import DetailsComponent from 'DecideTeam/DetailsPage'
import { useParams } from 'react-router-dom'
import { supabase } from '../dbConfig';
export default function DetailsPage() {
    const {id} =useParams()
    const [isLoading, setIsLoading]=useState(true);
    const [productData,setProductData]=useState({});
    useEffect(()=>{
        const getProduct = async () => {
            const { data, error } = await supabase
            .from("products").select().eq("id",id).single()
            setProductData(data);
            setIsLoading(false)
        }
        getProduct()
    },[])

    if(isLoading){
        return <h1>loading</h1>
    }
    return (
        <>
            <DetailsComponent product={productData} />
        </>
        
    )
}
