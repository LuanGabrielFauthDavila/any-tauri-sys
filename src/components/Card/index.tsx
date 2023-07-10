//DEFAULTS
import React from 'react';
//STYLES
import { CardStyle } from './styles';


interface CardProps {
    children: React.ReactNode;
}

export function Card ({ children }: CardProps) {
    return (
        <CardStyle>{ children }</CardStyle>
    )
}