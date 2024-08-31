import React, { useEffect, useState } from 'react';
import DetailsComponent from 'DecideTeam/DetailsPage';
import { useNavigate, useParams } from 'react-router-dom';

export default function DetailsPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    return (
        <DetailsComponent productId={id} navigationFunction ={navigate}/>
    );
}
