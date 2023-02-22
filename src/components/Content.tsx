import { Avatar, Badge, Button } from 'antd';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Array from './Array';

interface AppProps {
    data?: number[];
}

const MyContent: React.FC<AppProps> = ({ data }: AppProps) => {
    const [array1, setArray1] = useState([54, 23, 90]);
    const [array2, setArray2] = useState([89, 23, 1]);
    const [x, setX] = useState(100);
    const [y, setY] = useState(0);
    const [rotate, setRotate] = useState(0);

    const swapValues = () => {
        let x1 = array1[0];
        array1[0] = array1[1];
        array1[1] = x1;
        setArray1([...array1]);
        setArray2([...array2]);
        console.log('swapped');
    };

    return (
        <div>
            <Array data={array1}></Array>
            <div>
                <h3 style={{ color: 'black' }}>spacing</h3>
            </div>
            <Array data={array2}></Array>

            <Button
                onClick={() => {
                    setX(-x);
                }}
            >
                move box
            </Button>
            <div>
                <motion.div
                    className="box"
                    animate={{ x, y, rotate }}
                    transition={{ type: 'spring' }}
                    style={{
                        width: 200,
                        height: 200,
                        border: '3px dotted black'
                    }}
                />
            </div>
        </div>
    );
};

export default MyContent;
