import { Avatar, Badge } from 'antd';
import React from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

interface AppProps {
    data: number[];
    ref: React.Ref<HTMLButtonElement>;
}

const Array: React.FC<AppProps> = ({ data }: AppProps & {}) => {
    const cells = [];

    const [parent, enableAnimations] = useAutoAnimate(/* optional config */);
    for (let i = 0; i < data.length; i++) {
        cells.push(
            <Badge>
                <Avatar shape="square" size="large">
                    {data[i]}
                </Avatar>
            </Badge>
        );
    }
    return <ul ref={parent}>{cells}</ul>;
};

export default Array;
