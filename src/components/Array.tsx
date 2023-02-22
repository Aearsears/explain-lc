import { Avatar, Badge, Button } from 'antd';
import { motion } from 'framer-motion';
import React from 'react';

interface ArrayProps {
    data: number[];
}
interface CellProps {
    x: number;
    y: number;
    rotation: number;
    data: number;
}
interface ArrayState {
    cellProps: CellProps[];
    cells: React.ReactElement[];
}

class Array extends React.Component<ArrayProps, ArrayState> {
    constructor(props: ArrayProps) {
        super(props);

        const cellProps: CellProps[] = [];
        for (let i = 0; i < this.props.data.length; i++) {
            let cellProp: CellProps = {
                data: this.props.data[i],
                rotation: 0,
                x: 0,
                y: 0
            };
            cellProps.push(cellProp);
        }
        this.state = {
            cellProps: cellProps,
            cells: []
        };
    }

    swapValues = () => {
        let cellProps = [...this.state.cellProps];
        console.log(cellProps);

        //swap first and second elements, 0th and 1st
        let prop1 = cellProps[0];
        let prop2 = cellProps[1];

        cellProps[1] = prop1;
        cellProps[0] = prop2;

        this.setState({ ...this.state, cellProps });
        console.log('swapped');
        console.log(this.state);
    };

    render() {
        return (
            <div>
                <ul>
                    {this.state.cellProps.map((cellProp) => (
                        <Cell
                            key={cellProp.data}
                            data={cellProp.data}
                            x={cellProp.x}
                            y={cellProp.y}
                            rotation={cellProp.rotation}
                        ></Cell>
                    ))}
                    <Button onClick={this.swapValues}>swap</Button>
                </ul>
            </div>
        );
    }
}

class Cell extends React.Component<CellProps, {}> {
    constructor(props: CellProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <motion.li
                className="box"
                animate={{
                    x: this.props.x,
                    y: this.props.y,
                    rotate: this.props.rotation
                }}
                layout
                style={{
                    display: 'inline-block'
                }}
            >
                <Badge>
                    <Avatar shape="square" size="large">
                        {this.props.data}
                    </Avatar>
                </Badge>
            </motion.li>
        );
    }
}
export default Array;
