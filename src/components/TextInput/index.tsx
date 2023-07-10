//DEFAULTS
import React from 'react';
//STYLES
import { TextInputStyle } from './styles';


interface TextInputProps {
    value: string;
    onChange: React.Dispatch<React.SetStateAction<string>>;
    width?: string | number| undefined;
    typeInput?: string | undefined;
}

export function TextInput ({ 
    value, onChange, 
    width = '100%',
    typeInput = 'text'  
}: TextInputProps) {
    return (
        <TextInputStyle type={typeInput} width={width} value={value} onChange={(props) => { onChange(props.target.value) }} />
    )
}
