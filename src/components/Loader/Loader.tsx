import React from 'react';
import { LoaderSpinner } from './styles';

export const Loader: React.FC<{ active: boolean }> = ({ active }) => {
    return (
        <div>
            {active ? <LoaderSpinner /> : <></>}
        </div>
    );
}