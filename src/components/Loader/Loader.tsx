import { useSelector } from '@/context/provider';
import React, { useEffect, useState } from 'react';
import { LoaderSpinner } from './styles';

export const Loader: React.FC<{ active: boolean }> = ({ active }) => {
    return (
        <div>
            {active ? <LoaderSpinner /> : <></>}
        </div>
    );
}