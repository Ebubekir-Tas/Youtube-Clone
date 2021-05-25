import React from 'react';
import Card from '../../videos/Card';

export default function VideoRow({imageURL}) {
    return (
        <Card
            imageURL={imageURL}
        />
    );
};