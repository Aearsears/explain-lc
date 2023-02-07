import { Avatar, Badge, Button } from 'antd';
import React, { useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import Array from './Array';

interface AppProps {
    data?: number[];
}

const MyContent: React.FC<AppProps> = ({ data }: AppProps) => {
    const [array1, setArray1] = useState([54, 23, 90]);
    const [array2, setArray2] = useState([89, 23, 1]);

    const [items, setItems1] = useState([0, 1, 2]);
    const add1 = () => setItems1([...items, items.length]);
    const add2 = () => setItems2([...items2, items2.length]);
    const [items2, setItems2] = useState([3, 4, 5]);

    const randomize = () => {
        items.sort(() => (Math.random() > 0.5 ? 1 : -1));
        setItems1([...items]);
    };
    const swaplistitems = () => {
        let x1 = items[0];
        items[0] = items2[0];
        items2[0] = x1;
        setItems1([...items]);
        setItems2([...items2]);
    };
    const [parent, enableAnimations] = useAutoAnimate();
    let animationsOn = true;
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
            <Array data={array1} ref={parent}></Array>
            <div>
                <h3 style={{ color: 'black' }}>spacing</h3>
            </div>
            <Array data={array2} ref={parent}></Array>
            <Button onClick={swapValues}>swap values</Button>

            <ul ref={parent} style={{ color: 'black' }}>
                {items.map((item) => (
                    <li key={item}>
                        <Badge key={item}>
                            <Avatar shape="square" size="large">
                                {item}
                            </Avatar>
                        </Badge>
                    </li>
                ))}
            </ul>
            <ul ref={parent} style={{ color: 'black' }}>
                {items2.map((item) => (
                    <li key={item}>
                        <Badge>
                            <Avatar shape="square" size="large">
                                {item}
                            </Avatar>
                        </Badge>
                    </li>
                ))}
            </ul>

            <button onClick={add1}>Add number1</button>
            <button onClick={add2}>Add number2</button>
            <button onClick={swaplistitems}>swap numbers</button>
            <button onClick={randomize}>random</button>
            <button
                onClick={() => {
                    animationsOn = !animationsOn;
                    enableAnimations(animationsOn);
                }}
            >
                Disable
            </button>
        </div>
    );
};

export default MyContent;
