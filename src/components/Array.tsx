import { Avatar, Badge } from 'antd';
import React from 'react';

interface AppProps {
    data: number[];
}

const Array: React.FC<AppProps> = ({ data }: AppProps) => {
    const cells = [];
    for (let i = 0; i < data.length; i++) {
        cells.push(
            <Badge>
                <Avatar shape="square" size="large">
                    {data[i]}
                </Avatar>
            </Badge>
        );
    }
    return <div>{cells}</div>;
};

export default Array;
