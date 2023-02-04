import { Button } from 'antd';
import React from 'react';
import Array from './Array';

interface AppProps {
    data?: number[];
}

const MyContent: React.FC<AppProps> = ({ data }: AppProps) => {
    const array1 = [54, 23, 90];
    const array2 = [89, 23, 1];
    const swapValues = () => {
        let x1 = array1[0];
        array1[0] = array2[0];
        array2[0] = x1;
        console.log('swapped');
    };
    return (
        <div>
            <Array data={array1}></Array>
            <Array data={array2}></Array>
            <Button onClick={swapValues}>swap values</Button>
        </div>
    );
};

export default MyContent;
