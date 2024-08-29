import React, { useEffect, useState } from 'react';
import DetailsComponent from 'DecideTeam/DetailsPage';
import { useParams } from 'react-router-dom';

export default function DetailsPage() {
    const { id } = useParams();
    return (
        <DetailsComponent productId={id} />
    );
}
