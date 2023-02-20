import { Avatar, Badge, Button } from 'antd';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

interface AppProps {
    data: number[];
}

const Array: React.FC<AppProps> = ({ data }: AppProps & {}) => {
    const cells = [];
    const [x, setX] = useState(100);
    const [y, setY] = useState(0);
    const [rotate, setRotate] = useState(0);

    const swapValues = () => {
        let x1 = data[0];
        data[0] = data[1];
        data[1] = x1;
        console.log('swapped');
        setX(-x);
        setRotate(rotate - 180);
    };

    for (let i = 0; i < data.length; i++) {
        cells.push(
            <motion.div
                className="box"
                animate={{ x, y, rotate }}
                transition={{ type: 'just' }}
                style={{
                    border: '3px dotted black',
                    display: 'inline-block'
                }}
            >
                <Badge>
                    <Avatar shape="square" size="large">
                        {data[i]}
                    </Avatar>
                </Badge>
            </motion.div>
        );
    }
    return (
        <div>
            {cells}
            <Button onClick={swapValues}>swap</Button>
        </div>
    );
};

export default Array;
